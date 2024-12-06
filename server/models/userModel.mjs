import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: { type: Number, min: 10, max: 100 },
  skills: [String],
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
