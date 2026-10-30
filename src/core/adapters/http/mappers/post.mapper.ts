import type {
    AuthorDTO,
    CategoryDTO,
    PostDTO,
    PostSummaryDTO,
    TagDTO,
} from "@/core/domain";

function mapAuthor(raw: any): AuthorDTO | null {
    if (!raw) return null;

    return {
        idPerson: raw.idPerson,
        name: raw.name ?? "",
        firstLastname: raw.firstLastname ?? "",
        secondLastname: raw.secondLastname ?? null,
        fullName:
            raw.fullName ??
            [raw.name, raw.firstLastname, raw.secondLastname]
                .filter(Boolean)
                .join(" "),
        position: raw.position ?? null,
        email: raw.email ?? null,
        profilePhoto: raw.profilePhoto ?? null,
        bio: raw.bio ?? null,
    };
}

function mapCategories(raw: any): CategoryDTO[] {
    if (!Array.isArray(raw)) return [];

    return raw.map((category) => ({
        idCategory: category.idCategory,
        name: category.name,
        description: category.description ?? null,
    }));
}

function mapTags(raw: any): TagDTO[] {
    if (!Array.isArray(raw)) return [];

    return raw.map((tag) => ({
        idTag: tag.idTag,
        name: tag.name,
        slug: tag.slug,
    }));
}

function mapCommon(raw: any) {
    return {
        idPost: raw.idPost,
        title: raw.title,
        slug: raw.slug,
        postType: raw.postType,
        excerpt: raw.excerpt ?? null,
        readingTimeMinutes: raw.readingTimeMinutes ?? null,
        coverUrl: raw.coverUrl ?? null,
        coverAltText: raw.coverAltText ?? null,
        isFixed: Boolean(raw.isFixed),
        createdAt: raw.createdAt,
        publishedAt: raw.publishedAt ?? null,
        status: raw.status,
        newsDetails: raw.newsDetails ?? null,
        eventDetails: raw.eventDetails ?? null,
        announcementDetails: raw.announcementDetails ?? null,
        pressReleaseDetails: raw.pressReleaseDetails ?? null,
        authorName: raw.authorName ?? null,
        authorEmail: raw.authorEmail ?? null,
        authorPosition: raw.authorPosition ?? null,
        categories: mapCategories(raw.categories),
        tags: mapTags(raw.tags),
    };
}

export function mapPostSummaryDTO(raw: any): PostSummaryDTO {
    return mapCommon(raw) as PostSummaryDTO;
}

export function mapPostDTO(raw: any): PostDTO {
    return {
        ...mapCommon(raw),
        content: raw.content ?? null,
        contentJson: raw.contentJson ?? null,
        metaTitle: raw.metaTitle ?? null,
        metaDescription: raw.metaDescription ?? null,
        updatedAt: raw.updatedAt ?? null,
        author: mapAuthor(raw.author),
    } as PostDTO;
}
