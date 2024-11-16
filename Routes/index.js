import { Router } from "express";
import userRouter from "./userRoutes.js";

const routes = Router();

routes.use("/api/user", userRouter);

export default routes;