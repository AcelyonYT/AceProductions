import express from 'express';
import StatusController from "../controllers/statusController.js"
const router = express.Router();
const statusController = new StatusController();

router.get("/", statusController.renderStatusPage);

export default router;