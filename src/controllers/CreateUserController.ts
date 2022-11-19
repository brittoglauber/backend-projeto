import { Request, Response } from "express";
import { database } from "../database";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body

<<<<<<< HEAD
        const user = await database.user.create({
            data:{
                username,
                password
=======
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
>>>>>>> c9475fc316d092db9edc43a2933b5bd7588263ef
            }
        })

        return response.json(account)
    }

<<<<<<< HEAD
   
}

=======
    


}
>>>>>>> c9475fc316d092db9edc43a2933b5bd7588263ef
