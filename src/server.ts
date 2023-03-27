import express, { NextFunction, Request, Response } from 'express'
import { router } from './routes'
import cors from "cors"
import { AppError } from './errors/AppError'

const app = express()

app.use(cors())

app.use(express.json())

app.use(router)

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if(err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message
            })
        }

        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`
        })
    }
)

app.listen(5000, () => {
    console.log("Servidor está rodando on port 5000!")
})