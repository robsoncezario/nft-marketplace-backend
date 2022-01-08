import { Document } from 'mongoose';
import UserDoc from '../User/types';

export default interface CollectibleDoc extends Document {
	name: string;
	description: string;
	image: string;
	tokenId?: number;
	imageURL?: string;
	creator?: UserDoc;
	createdAt: Date;
	updatedAt: Date;
}
