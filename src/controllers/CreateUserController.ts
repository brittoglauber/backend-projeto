import { Request, Response } from "express";
import { database } from "../database";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        try{
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

            return response.status(201).json({ message: `O Usuario ${username} e aconta ${account.id} foram criadas com sucesso !`})
        }catch(err) {
            console.log(err)
            return response.status(500).json({ error: 'Internal server error. ' })
        }
    }

    


}
