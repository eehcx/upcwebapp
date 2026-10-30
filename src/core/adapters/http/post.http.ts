import type { PostRepository } from "@/core/domain/repositories";
import type {
    PostDTO,
    PostFilters,
    PostSummaryDTO,
} from "@/core/domain/entities/post.ts";
import type { PageResponse } from "@/shared/types";
import { httpGet } from "@/shared/lib";
import { mapPostDTO, mapPostSummaryDTO } from "./mappers";

export class PostHttpRepository implements PostRepository {
    async getPosts(
        filters?: PostFilters
    ): Promise<PageResponse<PostSummaryDTO>> {
        const data = await httpGet<PageResponse<any>>("/posts", filters);
        return {
            ...data,
            content: (data.content ?? []).map(mapPostSummaryDTO),
        };
    }

    async getBySlug(slug: string): Promise<PostDTO> {
        const data = await httpGet<any>(
            `/posts/slug/${encodeURIComponent(slug)}`
        );
        return mapPostDTO(data);
    }
}
