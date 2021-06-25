import { UsersRepositories } from "../Repository/UsersRepositories";

import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IAutheticateRequest {
    email: string;
    password: string;
}


class AutheticateUserService {
    async execute({ email, password }: IAutheticateRequest ){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email
        })

        if(!user){
            throw new Error("email/password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("email/password incorrect");
        }

        const token = sign(
            {
                email: user.email
            },
            "29a442fa58acdaf1a2593a0b89b7a883",
            {
                subject: user.id,
                expiresIn: "1d"
            }
        );

        return token;

    }
}

export { AutheticateUserService }