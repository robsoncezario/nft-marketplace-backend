import { Request, Response } from 'express';
import Collectible from '../../models/Collectible/types';
import CollectibleRepository from '../../repositories/CollectibleRepository';
import { CollectibleFindyByIdRequest } from './types';

export default class CollectibleController {
	static async findById(req: Request, res: Response) {
		try {
			const { id } = req.params as unknown as CollectibleFindyByIdRequest;

			const collectible: Collectible | null =
				await CollectibleRepository.getById(id);

			if (collectible === null) {
				res.status(404).send('Collectible not found');
			} else {
				res.status(200).json({ collectible: collectible });
			}
		} catch {
			res.status(500).send('Something failed');
		}
	}
}
