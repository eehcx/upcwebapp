import type { BoletinDTO, BoletinSummaryDTO } from "../entity";

export interface BoletinRepository {
    /** Published boletines, already reduced to listing data. */
    getPublished(): Promise<BoletinSummaryDTO[]>;

    /** Single boletín by its slug. */
    getBySlug(slug: string): Promise<BoletinDTO>;
}
