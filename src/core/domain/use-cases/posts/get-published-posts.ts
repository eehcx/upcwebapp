import type { PostRepository } from "@/core/domain/repositories";
import type { PostListDTO } from "@/core/domain/entities/post.ts";

export class GetPublishedPostsUseCase {
    constructor(private readonly repo: PostRepository) {}

    async execute(): Promise<PostListDTO[]> {
        return this.repo.getPublished();
    }
}