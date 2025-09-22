import type { PostRepository } from "@/core/domain/repositories";
import type { PostDTO } from "@/core/domain/entities/post.ts";

export class GetPostsBySlugUseCase {
    constructor(private readonly repo: PostRepository) {}

    async execute(slug: string): Promise<PostDTO> {
        return this.repo.getBySlug(slug);
    }
}