import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../Repository/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string
}

class CreateUserService {
    async execute ({ name, email, admin = false, password }: IUserRequest ){
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

        const passwordHash = await hash(password, 8);

        const user = usersRepositories.create({
            name,
            email,
            admin,
            password: passwordHash,
        });

        await usersRepositories.save(user);

        return user;
    }
}

export { CreateUserService }
