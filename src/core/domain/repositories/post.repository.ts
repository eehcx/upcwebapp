import type { PostDTO, PostListDTO } from "../entities";
import type { DateRangeParams } from "@/shared/types";

export interface PostRepository {
    //getAll(): Promise<PostEntity[]>;
    getPublished(): Promise<PostListDTO[]>;
    //getById(id: number): Promise<PostEntity | null>;
    getBySlug(slug: string): Promise<PostDTO>;
    //getByAuthor(authorId: number): Promise<PostEntity[]>;
    //getByCategory(categoryId: number): Promise<PostEntity[]>;
    //getByStatus(status: string): Promise<PostEntity[]>;
    getByDateRange(params: DateRangeParams): Promise<PostDTO[]>;
}