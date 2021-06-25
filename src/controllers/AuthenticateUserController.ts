import { Request, Response } from "express"
import { AutheticateUserService } from "../Service/AuthenticateUserService";

class AutheticateUserController {
    async handle(request: Request, response: Response){
        const autheticateUserService = new AutheticateUserService()

        const { email, password } = request.body

        const token = await autheticateUserService.execute({
            email,
            password
        });

        return response.json(token);
    }
}
export { AutheticateUserController }