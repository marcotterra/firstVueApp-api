import express from "express";
import User from "../models/User";
import { parseErrors } from "../utils";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body.user;

  try {
    const user = new User({ email });
    user.setPassword(password);
    user.setConfirmationToken();
    user.save();
    res.json({ user: user.toAuthJSON() });
  } catch (e) {
    res.status(400).json({ errors: parseErrors(e.errors) });
  }
});

router.get("/confirm/:token", async (req, res) => {
  const { token } = req.params;
  try {
    await User.findOneAndUpdate(
      { confirmationToken: token },
      { confirmationToken: "", confirmed: true }
    );
    res.json({ status: "Sucess" });
  } catch (e) {
    res.status(400).json({ errors: parseErrors(e) });
  }
});

export default router;
