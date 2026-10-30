import type {
    PostDTO,
    PostFilters,
    PostSummaryDTO,
} from "../entities/post.ts";
import type { PageResponse } from "@/shared/types";

export interface PostRepository {
    getPosts(
        filters?: PostFilters
    ): Promise<PageResponse<PostSummaryDTO>>;
    getBySlug(slug: string): Promise<PostDTO>;
}
