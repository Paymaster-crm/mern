import express from "express";
import UserModel from "../models/userModel.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  const user = await UserModel.findOne({ email: "aaa" });
  console.log(user);
  res.send(user);
});

export default router;
