import express from 'express';
import CollectibleController from '../../../controllers/CollectibleController';

const router = express.Router();

router.get('/:id', CollectibleController.findById);

export default router;
