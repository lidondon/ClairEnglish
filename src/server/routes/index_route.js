import express from "express";
import states from "./states_route";

const router = express.Router();

router.use("/states", states);

export default router;
