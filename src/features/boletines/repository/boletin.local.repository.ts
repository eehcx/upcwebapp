import type { BoletinDTO, BoletinSummaryDTO } from "../entity";
import type { BoletinRepository } from "./boletin.repository";
import { BOLETIN_FIXTURES } from "./boletin.fixtures";

export class BoletinNotFoundError extends Error {
    constructor(slug: string) {
        super(`Boletín no encontrado: ${slug}`);
        this.name = "BoletinNotFoundError";
    }
}

function toSummary(boletin: BoletinDTO): BoletinSummaryDTO {
    return {
        id: boletin.id,
        title: boletin.title,
        slug: boletin.slug,
        excerpt: boletin.excerpt,
        authorName: boletin.author?.fullName ?? "",
        authorEmail: boletin.author?.email ?? "",
        coverUrl: boletin.coverUrl,
        categoryCount: boletin.categories ? 1 : 0,
        isActive: boletin.isActive,
        status: boletin.status,
        createdAt: boletin.createdAt,
        publishedAt: boletin.publishedAt
    };
}

function publishedTime(boletin: BoletinDTO): number {
    return (boletin.publishedAt ?? boletin.createdAt).getTime();
}

/** Repositorio de contenido local, usado como respaldo del API. */
export class BoletinLocalRepository implements BoletinRepository {

    async getPublished(): Promise<BoletinSummaryDTO[]> {
        return BOLETIN_FIXTURES
            .filter((boletin) => boletin.isActive)
            .sort((a, b) => publishedTime(b) - publishedTime(a))
            .map(toSummary);
    }

    async getBySlug(slug: string): Promise<BoletinDTO> {
        const boletin = BOLETIN_FIXTURES.find((item) => item.slug === slug);

        if (!boletin) {
            throw new BoletinNotFoundError(slug);
        }

        return boletin;
    }
}
