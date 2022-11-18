import { Request, Response } from "express";
import { database } from "../database";

export class FindUsersController {
    async handle(request: Request, response: Response){
        const users = await database.user.findMany()

        return response.json(users)
        

    }

    
    
}