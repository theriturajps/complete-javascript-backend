import express from "express";
import { userLogin } from "../controller/userLogin.controller.js";

const router = express.Router();

// all routes related to login only
router.post('/', userLogin)

export default router;
