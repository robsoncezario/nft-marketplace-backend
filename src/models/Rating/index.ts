import { model, Model } from "mongoose";

import ratingSchema from "./schema";
import RatingDoc from "./types";

const RatingModel: Model<RatingDoc> = model<RatingDoc>("Rating", ratingSchema);

export default RatingModel;
