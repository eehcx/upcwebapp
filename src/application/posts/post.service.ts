import { GetPublishedPostsUseCase, GetPostsByDateRangeUseCase } from "@/domain/use-cases/posts";
import { PostHttpRepository } from "@/adapters/http/post.http";
import type { PostDTO } from "@/domain/entities/post";
import type { DateRangeParams } from "@/shared/types";

export class PostService {
    private readonly repo: PostHttpRepository;

    constructor() {
        this.repo = new PostHttpRepository();
    }

    async getPublishedPosts(): Promise<PostDTO[]> {
        const useCase = new GetPublishedPostsUseCase(this.repo);
        return useCase.execute();
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
