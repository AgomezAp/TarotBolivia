import { Router } from 'express';

import {
  captureOrder,
  createOrder,
} from '../controllers/payment.controller.js';

const router = Router();
router.post("/create-order", createOrder);

router.get("/capture-order", captureOrder);


export default router; 