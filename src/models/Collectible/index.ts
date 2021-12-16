import { model } from 'mongoose';
import collectibleSchema from './schema';
import Collectible from './types';

const CollectibleModel = model<Collectible>('Collectible', collectibleSchema);

export default CollectibleModel;
