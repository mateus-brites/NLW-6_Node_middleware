import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../Repository/UsersRepositories";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute ({ name, email, admin }: IUserRequest ){
        const usersRepositories =  getCustomRepository(UsersRepositories);
        
        if(!email){
            throw new Error("e-mail empty");
        }

        const userAlreadyExist = await usersRepositories.findOne({
            email,
        });

        if(userAlreadyExist){
            throw new Error("e-mail in use");
        }

        const user = usersRepositories.create({
            name,
            email,
            admin
        });

        await usersRepositories.save(user);

        return user;
    }
}

export { CreateUserService }
