import express from "express";
import { allUsers } from "../controllers/userController.js";
import { isAdmin, isAuthenticatedUser } from "../middelware/auth.js";

const router = express.Router();

router.route("/users").get(isAuthenticatedUser,isAdmin,allUsers)

export default router