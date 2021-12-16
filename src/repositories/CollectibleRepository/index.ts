import CollectibleModel from '../../models/Collectible';
import Collectible from '../../models/Collectible/types';

export default class CollectibleRepository {
	static async getById(id: string): Promise<Collectible | null> {
		return await CollectibleModel.findById(id);
	}
}
