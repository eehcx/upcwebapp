import type { BoletinDTO, BoletinSummaryDTO } from "../entity";
import type { BoletinRepository } from "./boletin.repository";
import { BoletinHttpRepository } from "./boletin.http.repository";
import { BoletinLocalRepository } from "./boletin.local.repository";

let hasWarned = false;

/**
 * Intenta resolver los boletines desde el API y, si no está disponible,
 * cae al contenido local para que la sección siga funcionando.
 */
export class BoletinFallbackRepository implements BoletinRepository {
    constructor(
        private readonly primary: BoletinRepository = new BoletinHttpRepository(),
        private readonly fallback: BoletinRepository = new BoletinLocalRepository()
    ) {}

    async getPublished(): Promise<BoletinSummaryDTO[]> {
        try {
            return await this.primary.getPublished();
        } catch (error) {
            this.warn(error);
            return this.fallback.getPublished();
        }
    }

    async getBySlug(slug: string): Promise<BoletinDTO> {
        try {
            return await this.primary.getBySlug(slug);
        } catch (error) {
            try {
                return await this.fallback.getBySlug(slug);
            } catch {
                // El boletín tampoco existe en el contenido local:
                // se conserva el error original del API.
                throw error;
            }
        }
    }

    private warn(error: unknown): void {
        if (hasWarned) return;
        hasWarned = true;

        const reason = error instanceof Error ? error.message : String(error);
        console.warn(`[boletines] API no disponible, usando contenido local. ${reason}`);
    }
}
