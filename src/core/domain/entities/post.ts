import type { AuthorDTO } from "./author.ts";
import type { CategoryDTO } from "./category.ts";
import type { TagDTO } from "./tag.ts";

export type PostType = "NEWS" | "EVENT" | "ANNOUNCEMENT" | "PRESS_RELEASE";

export type PostStatus = "DRAFT" | "IN_REVIEW" | "PUBLISHED" | "DELETED";

export type EventModality = "IN_PERSON" | "ONLINE" | "HYBRID";

export type TargetAudience =
    | "STUDENTS"
    | "FACULTY"
    | "APPLICANTS"
    | "ALUMNI"
    | "GENERAL";

export interface NewsDetailsDTO {
    kicker: string | null;
    isBreaking: boolean | null;
}

export interface EventDetailsDTO {
    eventStartDate: string | null;
    eventEndDate: string | null;
    eventLocation: string | null;
    eventModality: EventModality | null;
    registrationUrl: string | null;
}

export interface AnnouncementDetailsDTO {
    targetAudience: TargetAudience | null;
    deadlineDate: string | null;
    officialDocumentUrl: string | null;
}

export interface PressReleaseDetailsDTO {
    bulletinNumber: string | null;
    spokespersonName: string | null;
    pressKitUrl: string | null;
}

interface PostBase {
    idPost: number;
    title: string;
    slug: string;
    postType: PostType;
    excerpt: string | null;
    readingTimeMinutes: number | null;
    coverUrl: string | null;
    coverAltText: string | null;
    isFixed: boolean;
    createdAt: string;
    publishedAt: string | null;
    status: PostStatus;
    newsDetails: NewsDetailsDTO | null;
    eventDetails: EventDetailsDTO | null;
    announcementDetails: AnnouncementDetailsDTO | null;
    pressReleaseDetails: PressReleaseDetailsDTO | null;
    authorName: string | null;
    authorEmail: string | null;
    authorPosition: string | null;
    categories: CategoryDTO[] | null;
    tags: TagDTO[] | null;
}

export interface PostSummaryDTO extends PostBase {}

export interface PostDTO extends PostBase {
    content: string | null;
    contentJson: string | null;
    metaTitle: string | null;
    metaDescription: string | null;
    updatedAt: string | null;
    author: AuthorDTO | null;
}

export type PostFilters = {
    type?: PostType;
    q?: string;
    upcomingEvents?: boolean;
    fixed?: boolean;
    page?: number;
    size?: number;
};
