import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../Repository/ComplimentsRepositories";

class ListUserReceiverComplimentService {
    async execute(user_id: string){
        const complimentsRepoisitories = getCustomRepository(ComplimentsRepositories);

        const compliments = complimentsRepoisitories.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })

        return compliments;
    }
}

export {ListUserReceiverComplimentService}