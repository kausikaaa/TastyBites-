import express from 'express';
import {
  createOrder,
  getAllOrders,
  getOrdersByTable,
  updateOrderStatus,
  getOrderById,
  deleteOrder
} from '../controller/orderController.js';
import { authenticate, authorize } from '../controller/auth.js';

const router = express.Router();

// Public routes (for customers)
router.post('/', createOrder);
router.get('/table/:tableNumber', getOrdersByTable);

// Protected routes (for staff/admin)
router.get('/', authenticate, getAllOrders);
router.get('/:id', authenticate, getOrderById);
router.put('/:id/status', authenticate, authorize(['admin', 'staff']), updateOrderStatus);
router.delete('/:id', authenticate, authorize(['admin']), deleteOrder);

export default router;