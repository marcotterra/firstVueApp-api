import express from "express";
import Member from "../models/Member";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(404).json({ error: "Nothing here !" });
  }
});

router.post("/new", async (req, res) => {
  const { name, role, image, about, phone1, phone2 } = req.body.member;

  try {
    const member = new Member({ name, role, image, about, phone1, phone2 });
    member.save();
    res.json({success: `was successfully added.`});
  } catch (error) {
    res.status(400).json({ error: "Invalid fields" });
  }
});

export default router;
