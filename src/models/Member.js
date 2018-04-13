import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String, required: true },
  about: { type: String },
  email: { type: String },
  phone1: { type: String },
  phone2: { type: String }
});

export default mongoose.model("Member", schema);
