import type { PostRepository } from "@/core/domain/repositories";
import type { PostFilters, PostSummaryDTO } from "@/core/domain/entities/post.ts";
import type { PageResponse } from "@/shared/types";

export class GetPostsUseCase {
    constructor(private readonly repo: PostRepository) {}

    async execute(
        filters?: PostFilters
    ): Promise<PageResponse<PostSummaryDTO>> {
        return this.repo.getPosts(filters);
    }
}
