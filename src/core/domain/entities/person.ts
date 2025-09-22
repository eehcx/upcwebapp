import { PositionEntity } from "./position.ts";

export class PersonEntity {
    constructor(
        public idPerson: number,
        public name: string,
        public firstLastname: string,
        public secondLastname: string | null,
        public position: PositionEntity | null,
        public profilePhoto: string | null,
        public bio: string | null
    ) {}
}
