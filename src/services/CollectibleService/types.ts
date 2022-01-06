import CollectibleDoc from '../../models/Collectible/types';

export interface CollectibleFindyAllResponse {
	items: CollectibleDoc[];
	count: number;
}
