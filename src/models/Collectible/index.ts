import { model, Model } from "mongoose";

import collectibleSchema from "./schema";
import CollectibleDoc from "./types";

const CollectibleModel: Model<CollectibleDoc> = model<CollectibleDoc>(
  "Collectible",
  collectibleSchema
);

export default CollectibleModel;
