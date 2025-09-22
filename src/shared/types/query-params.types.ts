export type PaginationParams = {
    page?: number;
    size?: number;
};

export type SortParams = {
    sortBy?: string;
    publishedAt?: string; // ISO 8601 format
    sortDirection?: "asc" | "desc";
};

export type DateRangeParams = {
    startDate: string; // ISO 8601 format
    endDate: string;   // ISO 8601 format
};