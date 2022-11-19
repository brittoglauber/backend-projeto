import { Request, Response } from "express";
import { database } from "../database";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body

        const user = await database.user.create({
            data:{
                username,
                password
            }
        })

        return response.json(user)
    }

   
}

