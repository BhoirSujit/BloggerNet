import  express  from "express";
import userRouter from "./routes/userRouter";


const app = express();

app.use(express.urlencoded({extended: true}))

app.use('/api/user', userRouter);

export default app;