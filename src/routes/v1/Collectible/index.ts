import { Router } from 'express';
import joi from 'joi';

import CollectibleController from '../../../controllers/CollectibleController';
import upload from '../../../controllers/MulterController';

import validateQueryMiddleware from '../../../middlewares/joi/validateQuery';

export default class CollectibleRouter {
	public router: Router;

	constructor() {
		this.router = Router();
		this.routes();
	}

	public routes(): void {
		this.router.get(
			'/',
			validateQueryMiddleware(
				joi.object().keys({
					page: joi.number().integer().min(1).required(),
					rows: joi.number().integer().min(5).max(100).required(),
				})
			),
			CollectibleController.findAll
		);

		this.router.get('/:id', CollectibleController.findById);
		this.router.post(
			'/upload',
			upload.single('image'),
			CollectibleController.upload
		);
	}
}
