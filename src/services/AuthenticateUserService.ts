
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { database } from "../database";

interface IAuthenticateRequest {
  username: string;
  password: string;
}

class AuthenticateUserService {
  async execute({username, password}: IAuthenticateRequest) {
    const user = await database.user.findUnique({
      where: {
        username
      }
    })

    if(!user) {
      throw new Error("Email or password Incorrect !")
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error ("Email or password Incorrect !")
    }

    const token = sign({
      username: user.username
    }, "4aec22f22755bd6f0f4ce8aa289c3401", {
      subject: username, 
      expiresIn: "1d" 
    })

    return token;
  }
}

export {AuthenticateUserService}