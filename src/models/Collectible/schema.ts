import { Schema } from "mongoose";
import CollectibleDoc from "./types";

const collectibleSchema: Schema<CollectibleDoc> = new Schema<CollectibleDoc>(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },

    description: {
      type: String,
      required: true,
      index: true,
    },

    image: {
      type: String,
      required: true,
      unique: true,
    },

    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    tokenId: {
      type: Number,
      required: false,
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

collectibleSchema.set("toObject", { getters: true });
collectibleSchema.set("toJSON", { getters: true });

collectibleSchema.virtual("imageURL").get(function (this: CollectibleDoc) {
  return process.env.STATICS_FOLDER_PATH + "/" + this.image;
});

export default collectibleSchema;
