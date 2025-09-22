import { PersonEntity } from "./person.ts";
import { RoleEntity } from "./role.ts";

export class UserEntity {
    constructor(
        public id: number,
        public email: string,
        public roles: RoleEntity | null,
        public person: PersonEntity | null
    ) {}
}
