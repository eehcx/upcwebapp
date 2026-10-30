const DEFAULT_API_URL = "http://localhost:8080/upc/api/v1";

const runtimeApiUrl =
    typeof process !== "undefined" ? process.env.PUBLIC_API_URL : undefined;

export const API_BASE_URL = (
    runtimeApiUrl || import.meta.env.PUBLIC_API_URL || DEFAULT_API_URL
).replace(/\/+$/, "");

type QueryValue = string | number | boolean | null | undefined;

function buildQuery(params?: Record<string, QueryValue>): string {
    if (!params) return "";

    const search = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
        if (value === undefined || value === null || value === "") continue;
        search.set(key, String(value));
    }

    const query = search.toString();
    return query ? `?${query}` : "";
}

export async function httpGet<T>(
    path: string,
    params?: Record<string, QueryValue>
): Promise<T> {
    const url = `${API_BASE_URL}${path}${buildQuery(params)}`;
    const res = await fetch(url, {
        headers: {
            Accept: "application/json",
        },
        cache: "no-store",
    });

    if (!res.ok) {
        const detail = await res.text().catch(() => "");
        throw new Error(
            `Error en GET ${path}: ${res.status} ${res.statusText}${
                detail ? ` - ${detail}` : ""
            }`
        );
    }

    return res.json() as Promise<T>;
}

export function resolveApiAsset(
    value: string | null | undefined
): string | null {
    if (!value) return null;

    try {
        return new URL(value, `${API_BASE_URL}/`).toString();
    } catch {
        return null;
    }
}

export function safeExternalUrl(
    value: string | null | undefined
): string | null {
    if (!value) return null;

    try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:"
            ? url.toString()
            : null;
    } catch {
        return null;
    }
}
