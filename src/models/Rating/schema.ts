import { Schema, ObjectId } from "mongoose";
import RatingDoc from "./types";

const ratingSchema: Schema<RatingDoc> = new Schema<RatingDoc>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    collectible: {
      type: Schema.Types.ObjectId,
      ref: "Collectible",
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

ratingSchema.set("toObject", { getters: true });
ratingSchema.set("toJSON", { getters: true });

export default ratingSchema;
