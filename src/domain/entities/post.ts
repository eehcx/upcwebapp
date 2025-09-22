import type { AuthorDTO } from "./author";
import type { CategoryDTO } from "./category";

export interface PostDTO {
    id: number;
    title: string;
    content: any;
    author: AuthorDTO | null;
    coverUrl: string | null;
    isActive: boolean;
    createdAt: Date;
    publishedAt: Date | null;
    status: string;
    category: CategoryDTO | null;
}