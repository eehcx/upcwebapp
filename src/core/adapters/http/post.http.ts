import type {
    PostRepository,     // Repository
    PostDTO,            // Entity
    PostListDTO
} from "@/core/domain";
import type { DateRangeParams } from "@/shared/types";
import { mapPostDTO } from "./mappers";
import { httpGet } from "@/shared/lib";

export class PostHttpRepository implements PostRepository {

    async getPublished(): Promise<PostListDTO[]> {
        const data = await httpGet<{ content: PostListDTO[] }>("/posts/published");
        return data.content;
    }

    async getBySlug(slug: string): Promise<PostDTO> {
        const data = await httpGet<any>(`/posts/slug/${slug}`);
        return mapPostDTO(data);
    }

    async getByDateRange(params: DateRangeParams): Promise<PostDTO[]> {
        const data = await httpGet<any[]>(`/posts/date-range`, params);
        return data.map(mapPostDTO);
    }
}