import { httpGet } from "@/shared/lib";
import type { BoletinDTO, BoletinSummaryDTO } from "../entity";
import type { BoletinRepository } from "./boletin.repository";
import { mapBoletin, mapBoletinSummary } from "./boletin.mapper";

export class BoletinHttpRepository implements BoletinRepository {

    async getPublished(): Promise<BoletinSummaryDTO[]> {
        const data = await httpGet<{ content: any[] }>("/posts");
        return (data.content ?? []).map(mapBoletinSummary);
    }

    async getBySlug(slug: string): Promise<BoletinDTO> {
        const data = await httpGet<any>(`/posts/slug/${slug}`);
        return mapBoletin(data);
    }
}
