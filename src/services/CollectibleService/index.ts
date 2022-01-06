import CollectibleModel from '../../models/Collectible';
import CollectibleDoc from '../../models/Collectible/types';

import { CollectibleFindyAllResponse } from './types';

export default class CollectibleService {
	static async create(
		image: string,
		name: string,
		description: string
	): Promise<CollectibleDoc> {
		return await CollectibleModel.create({
			name,
			description,
			image,
		});
	}

	static async findAll(
		query: any = {},
		page: number,
		rows: number
	): Promise<CollectibleFindyAllResponse> {
		const items: CollectibleDoc[] = await CollectibleModel.find(query)
			.skip((page - 1) * rows)
			.limit(rows);
		const count: number = await CollectibleModel.estimatedDocumentCount(query);

		return {
			items,
			count,
		};
	}
}
