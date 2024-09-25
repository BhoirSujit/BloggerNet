import { Router } from "express";
import { handleCreateUser, handleUserVerification } from "../controllers/userController";

const userRouter = Router();

userRouter.get('/', handleUserVerification);
userRouter.post('/', handleCreateUser);



export default userRouter;