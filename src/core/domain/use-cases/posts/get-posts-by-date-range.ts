import type { PostRepository } from "@/core/domain/repositories";
import type { PostDTO } from "@/core/domain/entities/post.ts";
import type { DateRangeParams } from "@/shared/types";

export class GetPostsByDateRangeUseCase {
    constructor(private readonly repo: PostRepository) {}

    async execute(params: DateRangeParams): Promise<PostDTO[]> {
        return this.repo.getByDateRange(params);
    }
}