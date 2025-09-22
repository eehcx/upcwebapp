import type { PostRepository } from "@/domain/repositories";
import type { PostDTO } from "@/domain/entities/post";
import type { DateRangeParams } from "@/shared/types";

export class GetPostsByDateRangeUseCase {
    constructor(private readonly repo: PostRepository) {}

    async execute(params: DateRangeParams): Promise<PostDTO[]> {
        return this.repo.getByDateRange(params);
    }
}