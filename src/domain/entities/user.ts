import { PersonEntity } from "./person";
import { RoleEntity } from "./role";

export class UserEntity {
    constructor(
        public id: number,
        public email: string,
        public roles: RoleEntity | null,
        public person: PersonEntity | null
    ) {}
}
