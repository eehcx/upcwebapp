import {
    // Use cases - Posts
    GetPublishedPostsUseCase,
    GetPostsByDateRangeUseCase,
    GetPostsBySlugUseCase,
    // Entities
    type PostDTO,
    type PostListDTO
} from "@/core/domain";
import { PostHttpRepository } from "@/core/adapters";
import type { DateRangeParams } from "@/shared/types";

export class PostService {
    private readonly repo: PostHttpRepository;

    constructor() {
        this.repo = new PostHttpRepository();
    }

    async getPublishedPosts(): Promise<PostListDTO[]> {
        const useCase = new GetPublishedPostsUseCase(this.repo);
        return useCase.execute();
    }

    async getPostBySlug(slug: string): Promise<PostDTO> {
        const useCase = new GetPostsBySlugUseCase(this.repo);
        return useCase.execute(slug);
    }

    async getPostsByDateRange(start: string, end: string): Promise<PostDTO[]> {
        const useCase = new GetPostsByDateRangeUseCase(this.repo);
        const params : DateRangeParams = {
            startDate: start,
            endDate: end
        }
        return useCase.execute(params);
    }
}
