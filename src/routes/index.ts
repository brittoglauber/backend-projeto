import { Router } from "express"; 
import {ensureAuthenticated} from "../middlewares/auth"
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateUserController } from "../controllers/CreateUserController";
import { FindUserController } from "../controllers/FindUserController";
import { FindUsersController } from "../controllers/FindUsersController";
import { HelloController } from "../controllers/HelloController";


const router = Router()

const hello = new HelloController()


const createUser = new CreateUserController()
const findUser = new FindUserController()
const findUsers = new FindUsersController()

const authenticateUserController = new AuthenticateUserController()

router.get('/', hello.handle)

router.use(ensureAuthenticated)

router.post('/user', createUser.handle)
router.get('/user/:id', findUser.handle)
router.get('/users', findUsers.handle)

router.post('/login', authenticateUserController.handle)


export { router }