import type {
    EventModality,
    PostSummaryDTO,
    PostType,
    TargetAudience,
} from "@/core/domain/entities/post.ts";

export const POST_TYPE_LABELS: Record<PostType, string> = {
    NEWS: "Noticia",
    EVENT: "Evento",
    ANNOUNCEMENT: "Convocatoria",
    PRESS_RELEASE: "Comunicado",
};

export const POST_TYPE_STYLES: Record<PostType, string> = {
    NEWS: "bg-sky-50 text-sky-700 border-sky-200",
    EVENT: "bg-amber-50 text-amber-700 border-amber-200",
    ANNOUNCEMENT: "bg-emerald-50 text-emerald-700 border-emerald-200",
    PRESS_RELEASE: "bg-rose-50 text-rose-700 border-rose-200",
};

export const POST_TYPE_OPTIONS: Array<{
    value: PostType | "";
    label: string;
}> = [
    { value: "", label: "Todo" },
    { value: "NEWS", label: "Noticias" },
    { value: "EVENT", label: "Eventos" },
    { value: "ANNOUNCEMENT", label: "Convocatorias" },
    { value: "PRESS_RELEASE", label: "Comunicados" },
];

const EVENT_MODALITY_LABELS: Record<EventModality, string> = {
    IN_PERSON: "Presencial",
    ONLINE: "En línea",
    HYBRID: "Híbrido",
};

const AUDIENCE_LABELS: Record<TargetAudience, string> = {
    STUDENTS: "Estudiantes",
    FACULTY: "Docentes",
    APPLICANTS: "Aspirantes",
    ALUMNI: "Egresados",
    GENERAL: "Público general",
};

const dateFormatter = new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "America/Mexico_City",
});

const dateTimeFormatter = new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Mexico_City",
});

export function formatDate(value: string | null | undefined): string {
    if (!value) return "";
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? "" : dateFormatter.format(date);
}

export function formatDateTime(value: string | null | undefined): string {
    if (!value) return "";
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? "" : dateTimeFormatter.format(date);
}

export function formatDateRange(
    startValue: string | null,
    endValue: string | null
): string {
    const start = startValue ? new Date(startValue) : null;
    const end = endValue ? new Date(endValue) : null;

    if (start && Number.isNaN(start.getTime())) return "";
    if (end && Number.isNaN(end.getTime())) return "";

    if (start && end) {
        const sameDay =
            start.toLocaleDateString("es-MX", {
                timeZone: "America/Mexico_City",
            }) ===
            end.toLocaleDateString("es-MX", {
                timeZone: "America/Mexico_City",
            });

        if (sameDay) {
            return `${dateTimeFormatter.format(start)} a ${new Intl.DateTimeFormat(
                "es-MX",
                {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "America/Mexico_City",
                }
            ).format(end)}`;
        }

        return `${dateTimeFormatter.format(start)} — ${dateTimeFormatter.format(end)}`;
    }

    return formatDateTime(startValue) || formatDateTime(endValue);
}

export function getModalityLabel(value: EventModality | null): string | null {
    return value ? EVENT_MODALITY_LABELS[value] ?? value : null;
}

export function getAudienceLabel(value: TargetAudience | null): string | null {
    return value ? AUDIENCE_LABELS[value] ?? value : null;
}

export function postHref(slug: string): string {
    return `/boletines/${slug}`;
}

export function postTypeLabel(value: PostType): string {
    return POST_TYPE_LABELS[value] ?? value;
}

export function primaryCategory(post: PostSummaryDTO): string | null {
    return post.categories?.[0]?.name ?? null;
}
