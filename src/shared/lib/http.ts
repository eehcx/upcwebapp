const BASE_URL = import.meta.env.PUBLIC_API_URL || "http://localhost:8080/upc/api/v1";
const API_KEY = import.meta.env.PUBLIC_BEARER_TOKEN || "";

function buildQuery(params?: Record<string, any>): string {
    if (!params) return "";
    const query = new URLSearchParams(params).toString();
    return query ? `?${query}` : "";
}

export async function httpGet<T>(path: string, params?: Record<string, any>): Promise<T> {
    const url = `${BASE_URL}${path}${buildQuery(params)}`;
    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        const text = await res.text(); // cuerpo de la respuesta
        throw new Error(`Error en GET ${path}: ${res.status} ${res.statusText} - ${text}`);
    }

    return res.json();
}