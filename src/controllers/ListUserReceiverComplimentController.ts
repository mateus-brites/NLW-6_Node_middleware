import { Request, Response } from "express";
import { ListUserReceiverComplimentService } from "../Service/ListUserReceiverComplimentsService";

class ListUserReceiverComplimentController {
    async handle(request: Request, response :Response){
        const { user_id } = request;

        const listUserReceiverComplimentService = new ListUserReceiverComplimentService();

        const compliment = await listUserReceiverComplimentService.execute(user_id);

        return response.json(compliment);
    }
}

export { ListUserReceiverComplimentController }