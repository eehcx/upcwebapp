// shared/lib/http.ts
const BASE_URL = import.meta.env.BASE_URL || "http://localhost:8080/upc/api/v1";

function buildQuery(params?: Record<string, any>): string {
    if (!params) return "";
    const query = new URLSearchParams(params).toString();
    return query ? `?${query}` : "";
}

export async function httpGet<T>(path: string, params?: Record<string, any>): Promise<T> {
    const url = `${BASE_URL}${path}${buildQuery(params)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Error en GET ${path}`);
    return res.json();
}