import { Request, Response } from "express";
import { database } from "../database";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body

        const user  = await database.user.create({
            data:{
                username,
                password
            }
        })
        
        const account = await database.accounts.create({
            data: {
                balance: 100,
                userId: user.id
            }
        })

        return response.json(account)
    }

    


}