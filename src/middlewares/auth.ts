import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authtoken = request.headers.authorization;

    if (!authtoken) {
        return response.status(401).end();
    }

    const [, token] = authtoken.split(" ");

    try {
        const { sub } = verify(token, process.env.JWT_SECRET_KEY as string) as IPayload;

        // request.user_id = sub

        return next();

    } catch (err) {
        return response.status(401).end();
    }


}