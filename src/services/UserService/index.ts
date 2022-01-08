import UserModel from "../../models/User";
import UserDoc from "../../models/User/types";

export default class UserService {
  static async findByAddress(address: string): Promise<UserDoc | null> {
    return await UserModel.findOne({ address });
  }

  static async create(address: string): Promise<UserDoc> {
    const user: UserDoc | null = await UserService.findByAddress(address);

    if (user == null) {
      return await UserModel.create({ address });
    }

    return user;
  }
}
