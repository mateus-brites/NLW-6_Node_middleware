import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).end()
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, "29a442fa58acdaf1a2593a0b89b7a883") as IPayload;

        request.user_id = sub;

        return next()
    }catch{
        return response.status(401).end()
    }

}