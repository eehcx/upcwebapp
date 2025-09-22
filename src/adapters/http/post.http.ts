import type { PostRepository } from "@/domain/repositories";
import type { PostDTO } from "@/domain/entities/post";
import type { DateRangeParams } from "@/shared/types";
import { mapPostDTO } from "./mappers";
import { httpGet } from "@/shared/lib";

export class PostHttpRepository implements PostRepository {

    async getPublished(): Promise<PostDTO[]> {
        const data = await httpGet<any[]>("/posts/published");
        return data.map(mapPostDTO);
    }

    async getByDateRange(params: DateRangeParams): Promise<PostDTO[]> {
        const data = await httpGet<any[]>(`/posts/date-range`, params);
        return data.map(mapPostDTO);
    }
}