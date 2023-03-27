import { Router } from "express"; 
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateUserController } from "../controllers/CreateUserController";
import { FindUserController } from "../controllers/FindUserController";
import { FindUsersController } from "../controllers/FindUsersController";
import { HelloController } from "../controllers/HelloController";
import { ensureAuthenticated } from "../middlewares/auth"


const router = Router()

const hello = new HelloController()

const authUser = new AuthenticateUserController() 

const createUser = new CreateUserController()
const findUser = new FindUserController()
const findUsers = new FindUsersController()


router.get('/', hello.handle)

router.post('/user', createUser.handle)

router.post('/login', authUser.handle);

// router.use(ensureAuthenticated)

router.get('/user/:id', findUser.handle)
router.get('/users', findUsers.handle)


export { router }