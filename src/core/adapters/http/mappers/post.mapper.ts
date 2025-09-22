import type {
    PostDTO,
    AuthorDTO,
    CategoryDTO
} from "@/core/domain";

export function mapPostDTO(raw: any): PostDTO {
    return {
        id: raw.id,
        title: raw.title,
        content: raw.content,
        slug: raw.slug,
        author: raw.author ? {
            idPerson: raw.author.idPerson,
            name: raw.author.name,
            firstLastname: raw.author.firstLastname,
            secondLastname: raw.author.secondLastname,
            fullName: raw.author.fullName,
            position: raw.author.position,
            email: raw.author.email,
            profilePhoto: raw.author.profilePhoto,
            bio: raw.author.bio
        } as AuthorDTO : null,
        coverUrl: raw.coverUrl ?? null,
        isActive: raw.isActive ?? true,
        createdAt: new Date(raw.createdAt),
        publishedAt: raw.publishedAt ? new Date(raw.publishedAt) : null,
        status: raw.status,
        categories: raw.category ? {
            id: raw.category.id,
            name: raw.category.name
        } as CategoryDTO : null
    };
}