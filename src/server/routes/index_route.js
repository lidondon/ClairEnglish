import express from "express";
import states from "./states_route";
import emails from "./emails_route";

const router = express.Router();

router.use("/states", states);
router.use("/emails", emails);

export default router;
