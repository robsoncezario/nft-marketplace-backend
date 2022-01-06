import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

import UserDoc from './types';

const userSchema: Schema<UserDoc> = new Schema<UserDoc>(
	{
		address: {
			type: String,
			required: true,
			unique: true,
		},

		nonce: {
			type: String,
			default: uuid,
		},

		name: {
			type: String,
			required: false,
			index: true,
		},

		avatarURL: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
		autoCreate: true,
		toJSON: {
			virtuals: true,
		},
		toObject: {
			virtuals: true,
		},
	}
);

userSchema.set('toObject', { getters: true });
userSchema.set('toJSON', { getters: true });

export default userSchema;
