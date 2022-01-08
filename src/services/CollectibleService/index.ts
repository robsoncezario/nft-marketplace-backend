import CollectibleModel from "../../models/Collectible";
import CollectibleDoc from "../../models/Collectible/types";
import UserDoc from "../../models/User/types";

import { CollectibleFindyAllResponse } from "./types";

export default class CollectibleService {
  static async create(
    image: string,
    name: string,
    description: string,
    creator: UserDoc
  ): Promise<CollectibleDoc> {
    return await CollectibleModel.create({
      name,
      description,
      image,
      creator: creator,
    });
  }

  static async findAll(
    query: any = {},
    page: number,
    rows: number
  ): Promise<CollectibleFindyAllResponse> {
    const items: CollectibleDoc[] = await CollectibleModel.find(query)
      .skip((page - 1) * rows)
      .limit(rows);
    const count: number = await CollectibleModel.estimatedDocumentCount(query);

    return {
      items,
      count,
    };
  }

  static async updateTokenId(id: string, tokenId: number): Promise<void> {
    await CollectibleModel.updateOne(
      { id },
      {
        tokenId,
      }
    );
  }
}
