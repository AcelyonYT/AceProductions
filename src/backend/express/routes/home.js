import express from 'express';
import HomeController from '../controllers/homeController.js';
const router = express.Router();
const homeController = new HomeController();

router.get("/", homeController.renderHomePage);

export default router;