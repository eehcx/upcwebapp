import type { AuthorDTO } from "./author.ts";
import type { CategoryDTO } from "./category.ts";

export interface PostDTO {
    id: number;
    title: string;
    content: any;
    slug: string;
    author: AuthorDTO | null;
    coverUrl: string | null;
    isActive: boolean;
    createdAt: Date;
    publishedAt: Date | null;
    status: string;
    categories: CategoryDTO | null;
}

export interface PostListDTO {
    idPost: number
    title: string
    slug: string
    excerpt: string
    coverUrl: string | null
    isActive: boolean
    createdAt: Date
    publishedAt: Date | null
    status: string
    authorName: string
    authorEmail: string
    categoryCount: number
}