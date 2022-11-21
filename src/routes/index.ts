import { Router } from "express"; 
import { CreateUserController } from "../controllers/CreateUserController";
import { FindUserController } from "../controllers/FindUserController";
import { FindUsersController } from "../controllers/FindUsersController";
import { HelloController } from "../controllers/HelloController";

const router = Router()

const hello = new HelloController()

const createUser = new CreateUserController()
const findUser = new FindUserController()
const findUsers = new FindUsersController()

router.get('/', hello.handle)

router.post('/user', createUser.handle)
router.get('/user/:id', findUser.handle)
router.get('/users', findUsers.handle)


export { router }