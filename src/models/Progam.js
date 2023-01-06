import { Schema, model } from "mongoose";

const productSchema = new Schema( 
  {
    name: String,
    date: String,
    description: String,
    imgUrl: String,
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

export default model('Program', productSchema)