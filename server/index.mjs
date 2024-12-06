import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserModel from "./models/userModel.mjs";
import get from "./routes/get.mjs";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/test", {}).then(() => {
  console.log("Connected to MongoDB");
  app.use(get);

  app.post("/post", async (req, res) => {
    try {
      const { name, email, password, age, skills } = req.body;
      const user = new UserModel({ name, email, password, age, skills });
      await user.save();

      res.send({ message: "User created successfully" });
    } catch (err) {
      console.log(err);
    }
  });

  app.delete("/delete/:_id", async (req, res) => {
    try {
      const { _id } = req.params;
      await UserModel.findByIdAndDelete(_id);
      res.send({ message: "User deleted successfully" });
    } catch (err) {
      console.log(err);
    }
  });

  app.put("/update/:_id", async (req, res) => {
    try {
      const { _id } = req.params;
      const { name, email, password, age } = req.body;
      await UserModel.findByIdAndUpdate(
        _id,
        { name, email, password, age },
        { new: true }
      );
      _id;

      res.send({ message: "User updated successfully" });
    } catch (err) {
      console.log(err);
    }
  });

  const PORT = 9000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
