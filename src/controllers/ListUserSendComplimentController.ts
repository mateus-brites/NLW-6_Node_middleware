import { Request, Response } from "express";
import { ListUserSendComplimentService } from "../Service/ListUserSendComplimentsService";

class ListUserSendComplimentController {
    async handle(request: Request, response :Response){
        const { user_id } = request;

        const listUserSendComplimentService = new ListUserSendComplimentService();

        const compliment = await listUserSendComplimentService.execute(user_id);

        return response.json(compliment);
    }
}

export { ListUserSendComplimentController }