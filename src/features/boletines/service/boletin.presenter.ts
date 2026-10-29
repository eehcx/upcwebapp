import { marked } from "marked";
import readingTime from "reading-time";
import type { BoletinAuthorDTO, BoletinDTO } from "../entity";

export interface BoletinTocItem {
    id: string;
    title: string;
}

export interface BoletinAuthorView {
    fullName: string;
    position: string;
    initials: string;
    profilePhoto: string | null;
}

/** Ready-to-render boletín, produced by the service layer. */
export interface BoletinDetailView {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    contentHtml: string;
    toc: BoletinTocItem[];
    coverUrl: string | null;
    categoryName: string | null;
    author: BoletinAuthorView | null;
    publishedIso: string;
    publishedLabel: string;
    readingTimeText: string;
}

const DATE_FORMAT: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric"
};

const HEADING_PATTERN = /<h([2-3])>(.*?)<\/h\1>/gs;

function slugify(value: string): string {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/<[^>]+>/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function plainText(markdown: string): string {
    return markdown
        .replace(/```[\s\S]*?```/g, " ")
        .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
        .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
        .replace(/[#>*_~`-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function buildExcerpt(markdown: string, maxLength = 200): string {
    const text = plainText(markdown);
    if (text.length <= maxLength) return text;

    return `${text.slice(0, maxLength).trimEnd()}…`;
}

function buildInitials(author: BoletinAuthorDTO): string {
    const source = author.fullName?.trim() || [author.name, author.firstLastname].filter(Boolean).join(" ");
    const parts = source.split(/\s+/).filter(Boolean);

    if (parts.length === 0) return "?";
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();

    return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
}

function renderMarkdown(markdown: string): { html: string; toc: BoletinTocItem[] } {
    const html = marked.parse(markdown, { async: false }) as string;
    const toc: BoletinTocItem[] = [];
    const usedIds = new Set<string>();

    const withAnchors = html.replace(HEADING_PATTERN, (_match, level: string, inner: string) => {
        const title = inner.replace(/<[^>]+>/g, "").trim();
        const baseId = slugify(title) || `seccion-${toc.length + 1}`;
        let id = baseId;

        while (usedIds.has(id)) {
            id = `${baseId}-${toc.length + 1}`;
        }

        usedIds.add(id);
        toc.push({ id, title });

        return `<h${level} id="${id}">${inner}</h${level}>`;
    });

    return { html: withAnchors, toc };
}

export function toBoletinDetailView(boletin: BoletinDTO): BoletinDetailView {
    const { html, toc } = renderMarkdown(boletin.content ?? "");
    const publishedAt = boletin.publishedAt ?? boletin.createdAt;
    const minutes = Math.max(1, Math.ceil(readingTime(plainText(boletin.content ?? "")).minutes));

    return {
        id: boletin.id,
        title: boletin.title,
        slug: boletin.slug,
        excerpt: boletin.excerpt?.trim() || buildExcerpt(boletin.content ?? ""),
        contentHtml: html,
        toc,
        coverUrl: boletin.coverUrl,
        categoryName: boletin.categories?.name ?? null,
        author: boletin.author
            ? {
                fullName: boletin.author.fullName,
                position: boletin.author.position,
                initials: buildInitials(boletin.author),
                profilePhoto: boletin.author.profilePhoto || null
            }
            : null,
        publishedIso: publishedAt.toISOString(),
        publishedLabel: publishedAt.toLocaleDateString("es-MX", DATE_FORMAT),
        readingTimeText: `${minutes} min de lectura`
    };
}
