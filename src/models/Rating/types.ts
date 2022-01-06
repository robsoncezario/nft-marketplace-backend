import { Document } from 'mongoose';

import CollectibleDoc from '../Collectible/types';
import UserDoc from '../User/types';

export default interface RatingDoc extends Document {
	id: string;
	user: UserDoc;
	collectible: CollectibleDoc;
	createdAt: Date;
	updatedAt: Date;
}
