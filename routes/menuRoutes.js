import express from 'express';
import {
  getAllMenuItems,
  getAvailableMenuItems,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  toggleAvailability
} from '../controller/menuController.js';
import { authenticate, authorize } from '../controller/auth.js';

const router = express.Router();

// Public routes
router.get('/available', getAvailableMenuItems);

// Protected routes
router.get('/', authenticate, getAllMenuItems);
router.post('/', authenticate, authorize(['admin']), createMenuItem);
router.put('/:id', authenticate, authorize(['admin']), updateMenuItem);
router.delete('/:id', authenticate, authorize(['admin']), deleteMenuItem);
router.patch('/:id/toggle', authenticate, authorize(['admin', 'staff']), toggleAvailability);

export default router;