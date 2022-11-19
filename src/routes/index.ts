import { Router } from "express"; 
import { CreateUserController } from "../controllers/CreateUserController";
import { findAll } from "../controllers/findAll";
import { FindUserController } from "../controllers/FindUserController";
import { HelloController } from "../controllers/HelloController";

const router = Router()

const hello = new HelloController()

const createUser = new CreateUserController()
const findUser = new FindUserController()
const users = new findAll()

router.get('/', hello.handle)

router.post('/user', createUser.handle)
router.get('/user/:id', findUser.handle)
router.get('/users', users.handle)

export { router }