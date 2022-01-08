import UserModel from "../../models/User";
import UserDoc from "../../models/User/types";

export default class UserRepository {
  static async getById(id: string): Promise<UserDoc | null> {
    return await UserModel.findById(id);
  }

  static async getAll(): Promise<UserDoc[]> {
    return await UserModel.find();
  }
}
