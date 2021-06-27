import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../Repository/UsersRepositories";
import { classToPlain } from "class-transformer";


class ListUsersService{
    async execute(){
        const usersTepositories = getCustomRepository(UsersRepositories);

        const users = await usersTepositories.find();

        return classToPlain(users);
    }
}

export {ListUsersService}