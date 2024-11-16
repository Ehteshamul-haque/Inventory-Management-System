import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../Controller/userController.js";

const userRouter = Router();

userRouter
  .post("/", createUser)
  .put("/:id", updateUser)
  .get("/", getUsers)
  .get("/:id", getUserById)
  .delete("/:id", deleteUser);

export default userRouter;
