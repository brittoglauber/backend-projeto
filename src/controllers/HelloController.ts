import { Request, Response } from "express";

export class HelloController {
    async handle(request: Request, response: Response){
        response.send('Hello')
    }
}