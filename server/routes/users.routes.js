import { Router } from "express";
import { getUsers, getUser, postUsers, putUsers, deleteUsers } from "../controllers/users.controllers.js";

const router = Router();

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.post("/users", postUsers);

router.put("/users/:id", putUsers);

router.delete("/users/:id", deleteUsers);

export default router;