import express from "express";
import emailsController from "../controllers/emails_controller";

const router = express.Router();

router.route("/").post(emailsController.post);

export default router;
