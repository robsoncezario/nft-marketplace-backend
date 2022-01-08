import CollectibleModel from '../../models/Collectible';
import CollectibleDoc from '../../models/Collectible/types';

export default class CollectibleRepository {
	static async getById(id: string): Promise<CollectibleDoc | null> {
		return await CollectibleModel.findById(id).populate('creator');
	}
}
