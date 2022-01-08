import { ethers } from "ethers";
import { v4 as uuid } from "uuid";

import UserModel from "../../models/User";
import UserDoc from "../../models/User/types";

export default class AuthService {
  static isValidAddress(address: string): boolean {
    try {
      ethers.utils.getAddress(address);
      return true;
    } catch {
      return false;
    }
  }

  static async updateNonce(address: string): Promise<UserDoc | null> {
    const nonce: string = uuid();

    return await UserModel.findOneAndUpdate(
      { address },
      { address, nonce },
      {
        upsert: true,
        returnOriginal: false,
      }
    );
  }
}
