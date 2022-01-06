import { Request, Response } from 'express';
import { Document } from 'mongoose';

import CollectibleDoc from '../../models/Collectible/types';
import CollectibleRepository from '../../repositories/CollectibleRepository';
import CollectibleService from '../../services/CollectibleService';
import { CollectibleFindyAllResponse } from '../../services/CollectibleService/types';

import { CollectibleFindyByIdRequest, CollectibleInput } from './types';

export default class CollectibleController {
	static async findAll(req: Request, res: Response): Promise<void> {
		try {
			const { page, rows } = req.query;
			const { items, count }: CollectibleFindyAllResponse =
				await CollectibleService.findAll(
					{},
					parseInt(page as string),
					parseInt(rows as string)
				);

			res.setHeader('x-total-count', count);
			res.status(200).json({ items });
		} catch {
			res.status(400).send({ error: 'Something failed' });
		}
	}

	static async findById(req: Request, res: Response): Promise<void> {
		try {
			const { id } = req.params as unknown as CollectibleFindyByIdRequest;

			const collectible: CollectibleDoc | null =
				await CollectibleRepository.getById(id);

			if (collectible === null) {
				res.status(404).send('Collectible not found');
			} else {
				res.status(200).json({ collectible: collectible });
			}
		} catch {
			res.status(400).send({ error: 'Something failed' });
		}
	}

	static async upload(req: Request, res: Response): Promise<void> {
		try {
			if (req.file) {
				const { name, description } = req.body as unknown as CollectibleInput;
				const collectible: Document<CollectibleDoc> =
					await CollectibleService.create(req.file.filename, name, description);

				res.status(200).json({ collectible: collectible });
			}
		} catch {
			res.status(409).json({ error: '' });
		}
	}
}
