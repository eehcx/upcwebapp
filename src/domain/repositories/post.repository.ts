import type { PostDTO } from "../entities/post";
import type { DateRangeParams } from "@/shared/types";

export interface PostRepository {
    //getAll(): Promise<PostEntity[]>;
    getPublished(): Promise<PostDTO[]>;
    //getById(id: number): Promise<PostEntity | null>;
    //getBySlug(slug: string): Promise<PostEntity | null>;
    //getByAuthor(authorId: number): Promise<PostEntity[]>;
    //getByCategory(categoryId: number): Promise<PostEntity[]>;
    //getByStatus(status: string): Promise<PostEntity[]>;
    getByDateRange(params: DateRangeParams): Promise<PostDTO[]>;
}