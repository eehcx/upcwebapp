import type { BoletinDTO, BoletinSummaryDTO } from "../entity";
import type { BoletinRepository } from "../repository";
import { BoletinFallbackRepository } from "../repository";
import { toBoletinDetailView, type BoletinDetailView } from "./boletin.presenter";

export class BoletinService {
    private readonly repo: BoletinRepository;

    constructor(repo: BoletinRepository = new BoletinFallbackRepository()) {
        this.repo = repo;
    }

    async getPublishedBoletines(): Promise<BoletinSummaryDTO[]> {
        return this.repo.getPublished();
    }

    async getLatestBoletines(limit = 3): Promise<BoletinSummaryDTO[]> {
        const boletines = await this.repo.getPublished();
        return boletines
            .sort((a, b) => this.timestamp(b) - this.timestamp(a))
            .slice(0, limit);
    }

    async getBoletinBySlug(slug: string): Promise<BoletinDTO> {
        return this.repo.getBySlug(slug);
    }

    async getBoletinDetailBySlug(slug: string): Promise<BoletinDetailView> {
        const boletin = await this.repo.getBySlug(slug);
        return toBoletinDetailView(boletin);
    }

    private timestamp(boletin: BoletinSummaryDTO): number {
        return (boletin.publishedAt ?? boletin.createdAt).getTime();
    }
}
