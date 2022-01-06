import { Document } from 'mongoose';

export default interface UserDoc extends Document {
	id: string;
	address: string;
	nonce: string;
	name?: string;
	avatarURL?: string;
	createdAt: Date;
	updatedAt: Date;
}
