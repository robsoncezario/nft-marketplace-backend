import { Schema } from 'mongoose';
import Collectible from './types';

const collectibleSchema = new Schema<Collectible>(
	{
		name: {
			type: String,
			required: true,
		},

		description: {
			type: String,
			required: true,
		},

		url: {
			type: String,
			required: true,
			get: (url: string) => {
				return process.env.STATICS_FOLDER_PATH + '/' + url;
			},
		},

		price: {
			type: Number,
			required: true,
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

collectibleSchema.set('toObject', { getters: true });
collectibleSchema.set('toJSON', { getters: true });

export default collectibleSchema;
