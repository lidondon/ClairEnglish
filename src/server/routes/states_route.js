import express from "express";
import statesController from "../controllers/states_controller";

const router = express.Router();

router.route("/").get(statesController.get);

export default router;
