import { hash } from "bcrypt";
import { Request, Response } from "express";
import { database } from "../database";
import { AppError } from "../errors/AppError";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        
        const { username, password } = request.body

        const userAlreadyExists = await database.user.findUnique({
            where: {
                username
            }
        })

        if(userAlreadyExists) {
            throw new AppError("User already exists!");
        }

        const passwordHash = await hash(password, 8)

        const user  = await database.user.create({
            data:{
                username,
                password: passwordHash
            }
        })

        
        
        const account = await database.accounts.create({
            data: {
                balance: 100,
                userId: user.id
            }
        })

        return response.status(201).json({ message: `O Usuario ${username} e aconta ${account.id} foram criadas com sucesso !`})
        
    }


}
