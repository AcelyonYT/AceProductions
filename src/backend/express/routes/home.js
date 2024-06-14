import { Router } from 'express';
import HomeController from '../controllers/homeController.js';

const router = Router();
const homecontroller = new HomeController();

router.get( "/", homecontroller.renderHomePage );

export default router