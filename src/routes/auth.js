import express from "express";
import jwt from 'jsonwebtoken';
import User from "../models/User";

const router = express.Router();

router.post("/", async (req, res) => {
  const { credentials } = req.body;

  try {
    const user = await User.findOne({ email: credentials.email });

    if (user && user.isValidPassword(credentials.password)) {
      res.json({ user: user.toAuthJSON() });
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(400).json({ error: "Something is wrong" });
  }
});

router.post("/validate_token", (req, res) => {
  jwt.verify(req.body.token, process.env.JWT_SECRET, err => {
    if (err) {
      res.status(401).json({});
    } else {
      res.json({});
    }
  });
});

export default router;
