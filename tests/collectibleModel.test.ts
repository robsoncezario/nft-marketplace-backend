import { expect } from 'chai';
import * as dotenv from 'dotenv';
import connect from '../src/database/connect';
import CollectibleModel from '../src/models/Collectible';
import Collectible from '../src/models/Collectible/types';

dotenv.config();

describe('Mongo', async function () {
	var doc: null | Collectible;

	before(async () => {
		await connect();

		doc = new CollectibleModel({
			name: 'Deadpool',
			description:
				'Deadpool, whose real name is Wade Winston Wilson, is a disfigured mercenary with the superhuman ability of regeneration and physical prowess',
			url: 'test.jpg',
			price: 1000,
		});
	});

	describe('Collectible doc', async () => {
		it('has the base url statics folder', async () => {
			expect(doc?.url?.includes(process.env.STATICS_FOLDER_PATH as string)).to
				.be.true;
		});

		it('has a description', async () => {
			expect(doc && 'description' in doc).to.be.true;
		});

		it('has a price and is equal to 1000', async () => {
			expect(doc && 'price' in doc).to.be.true;
			expect(doc!.price == 1000).to.be.true;
		});
	});
});
