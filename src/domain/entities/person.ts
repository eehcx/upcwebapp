import { PositionEntity } from "./position";

export class PersonEntity {
    constructor(
        public id: number,
        public name: string,
        public firstLastname: string,
        public secondLastname: string | null,
        public position: PositionEntity | null,
        public profilePhoto: string | null,
        public bio: string | null
    ) {}
}
