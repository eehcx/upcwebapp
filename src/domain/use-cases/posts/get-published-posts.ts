import type { PostRepository } from "@/domain/repositories";
import type { PostDTO } from "@/domain/entities/post";

export class GetPublishedPostsUseCase {
    constructor(private readonly repo: PostRepository) {}

    async execute(): Promise<PostDTO[]> {
        return this.repo.getPublished();
    }
}