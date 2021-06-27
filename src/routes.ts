import { Router } from "express"

import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AutheticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ListUserSendComplimentController } from "./controllers/ListUserSendComplimentController";
import { ListUserReceiverComplimentController } from "./controllers/ListUserReceiverComplimentController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AutheticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentController = new ListUserSendComplimentController();
const listUserReceiverComplimentController = new ListUserReceiverComplimentController();
const listTagController = new ListTagController()
const listUsersController = new ListUsersController()

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliment", ensureAuthenticated, createComplimentController.handle);

router.get("/users/compliment/sender", ensureAuthenticated, listUserSendComplimentController.handle);
router.get("/users/compliment/receiver", ensureAuthenticated, listUserReceiverComplimentController.handle);
router.get("/tags", listTagController.handle);
router.get("/users", listUsersController.handle);
export { router }