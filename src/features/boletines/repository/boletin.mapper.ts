import { resolveApiAsset } from "@/shared/lib";
import type {
    BoletinAuthorDTO,
    BoletinCategoryDTO,
    BoletinDTO,
    BoletinSummaryDTO
} from "../entity";

function mapAuthor(raw: any): BoletinAuthorDTO | null {
    if (!raw) return null;

    return {
        idPerson: raw.idPerson,
        name: raw.name ?? "",
        firstLastname: raw.firstLastname ?? "",
        secondLastname: raw.secondLastname ?? "",
        fullName: raw.fullName ?? "",
        position: raw.position ?? "",
        email: raw.email ?? "",
        profilePhoto: resolveApiAsset(raw.profilePhoto) ?? "",
        bio: raw.bio ?? ""
    };
}

function mapCategory(raw: any): BoletinCategoryDTO | null {
    if (!raw) return null;

    return {
        id: raw.id,
        name: raw.name,
        description: raw.description
    };
}

export function mapBoletin(raw: any): BoletinDTO {
    const rawCategory = Array.isArray(raw.categories)
        ? raw.categories[0]
        : (raw.category ?? raw.categories);

    return {
        id: raw.idPost ?? raw.id,
        title: raw.title,
        slug: raw.slug,
        content: raw.content ?? "",
        excerpt: raw.excerpt ?? raw.summary ?? "",
        author: mapAuthor(raw.author),
        categories: mapCategory(rawCategory),
        coverUrl: resolveApiAsset(raw.coverUrl),
        isActive: raw.isActive ?? true,
        status: raw.status,
        createdAt: new Date(raw.createdAt),
        publishedAt: raw.publishedAt ? new Date(raw.publishedAt) : null
    };
}

export function mapBoletinSummary(raw: any): BoletinSummaryDTO {
    return {
        id: raw.idPost ?? raw.id,
        title: raw.title,
        slug: raw.slug,
        excerpt: raw.excerpt ?? "",
        authorName: raw.authorName ?? "",
        authorEmail: raw.authorEmail ?? "",
        coverUrl: resolveApiAsset(raw.coverUrl),
        categoryCount: raw.categoryCount ?? 0,
        isActive: raw.isActive ?? true,
        status: raw.status,
        createdAt: new Date(raw.createdAt),
        publishedAt: raw.publishedAt ? new Date(raw.publishedAt) : null
    };
}
