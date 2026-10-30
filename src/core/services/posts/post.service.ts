import {
    GetPostsUseCase,
    GetPostsBySlugUseCase,
} from "@/core/domain/use-cases/posts";
import { PostHttpRepository } from "@/core/adapters";
import type {
    PostDTO,
    PostFilters,
    PostSummaryDTO,
} from "@/core/domain/entities/post.ts";
import type { PageResponse } from "@/shared/types";

export class PostService {
    private readonly repo: PostHttpRepository;

    constructor() {
        this.repo = new PostHttpRepository();
    }

    async getPosts(
        filters?: PostFilters
    ): Promise<PageResponse<PostSummaryDTO>> {
        const useCase = new GetPostsUseCase(this.repo);
        return useCase.execute(filters);
    }

    async getPostBySlug(slug: string): Promise<PostDTO> {
        const useCase = new GetPostsBySlugUseCase(this.repo);
        return useCase.execute(slug);
    }
}
