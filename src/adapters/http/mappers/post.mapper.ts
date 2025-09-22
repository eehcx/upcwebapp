import type { PostDTO } from "@/domain/entities/post";
import type { AuthorDTO } from "@/domain/entities/author";
import type { CategoryDTO } from "@/domain/entities/category";

export function mapPostDTO(raw: any): PostDTO {
    return {
        id: raw.id,
        title: raw.title,
        content: raw.content,
        author: raw.author ? {
            idPerson: raw.author.idPerson,
            firstName: raw.author.firstName,
            lastName: raw.author.lastName,
            email: raw.author.email
        } as AuthorDTO : null,
        coverUrl: raw.coverUrl ?? null,
        isActive: raw.isActive ?? true,
        createdAt: new Date(raw.createdAt),
        publishedAt: raw.publishedAt ? new Date(raw.publishedAt) : null,
        status: raw.status,
        category: raw.category ? {
            id: raw.category.id,
            name: raw.category.name
        } as CategoryDTO : null
    };
}