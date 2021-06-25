import { ComplimentsRepositories } from "../Repository/ComplimentsRepositories";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../Repository/UsersRepositories";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService{
    async execute({ tag_id, user_sender, user_receiver, message}: IComplimentRequest){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);

        if(user_sender === user_receiver){
            throw new Error("sender and receiver does not can be equal");
        }

        const userReceiver = await usersRepositories.findOne(user_receiver)
        
        if(!userReceiver){
            throw new Error("Receiver does not exist");
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        });

        await complimentsRepositories.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService }