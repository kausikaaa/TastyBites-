import express from 'express';
import {
  getAllTables,
  createTable,
  updateTableStatus,
  getTableByQR,
  deleteTable
} from '../controller/tableController.js';
import { authenticate, authorize } from '../controller/auth.js';

const router = express.Router();

// Public routes
router.get('/qr/:qrCode', getTableByQR);

// Protected routes
router.get('/', authenticate, getAllTables);
router.post('/', authenticate, authorize(['admin']), createTable);
router.put('/:id/status', authenticate, authorize(['admin', 'staff']), updateTableStatus);
router.delete('/:id', authenticate, authorize(['admin']), deleteTable);

export default router;