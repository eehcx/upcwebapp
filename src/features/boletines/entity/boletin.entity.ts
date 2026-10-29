/**
 * Entity layer for the boletines feature.
 * Plain data contracts shared by repository, service and presentation.
 */

export interface BoletinAuthorDTO {
    idPerson: number;
    name: string;
    firstLastname: string;
    secondLastname: string;
    fullName: string;
    position: string;
    email: string;
    profilePhoto: string;
    bio: string;
}

export interface BoletinCategoryDTO {
    id: number;
    name: string;
    description?: string;
}

/** Full boletín, used in the detail view. */
export interface BoletinDTO {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    author: BoletinAuthorDTO | null;
    categories: BoletinCategoryDTO | null;
    coverUrl: string | null;
    isActive: boolean;
    status: string;
    createdAt: Date;
    publishedAt: Date | null;
}

/** Lightweight boletín used in listings and cards. */
export interface BoletinSummaryDTO {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    authorName: string;
    authorEmail: string;
    coverUrl: string | null;
    categoryCount: number;
    isActive: boolean;
    status: string;
    createdAt: Date;
    publishedAt: Date | null;
}
