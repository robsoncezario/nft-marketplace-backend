import { model, Model } from 'mongoose';

import userSchema from './schema';
import UserDoc from './types';

const UserModel: Model<UserDoc> = model<UserDoc>('User', userSchema);

export default UserModel;
