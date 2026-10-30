export interface AuthorDTO {
    idPerson: number;
    name: string;
    firstLastname: string;
    secondLastname: string | null;
    fullName: string;
    position: string | null;
    email: string | null;
    profilePhoto: string | null;
    bio: string | null;
}
