import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../Repository/ComplimentsRepositories";

class ListUserSendComplimentService {
    async execute(user_id: string){
        const complimentsRepoisitories = getCustomRepository(ComplimentsRepositories);

        const compliments = complimentsRepoisitories.find({
            where: {
                user_sender: user_id
            }
        })

        return compliments;
    }
}

export {ListUserSendComplimentService}