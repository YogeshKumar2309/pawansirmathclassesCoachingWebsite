

import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
import User from "../models/user.model.js";


const router = express.Router();

router.post("/register",register);
router.post("/login", login);
router.get("/logout", logout);


router.get("/me", async (req, res) => {
  if (!req.session.user) {
    return res.json({
      loggedIn: false
    });
  }

     // ✅ session se user id
    const userId = req.session.user.id;

    // ✅ DB se user fetch (password hata diya)
    const user = await User.findById(userId).select("-password");

    // ❌ user delete ho gaya ya invalid
    if (!user) {
      return res.json({
        loggedIn: false,
      });
    }

    // ✅ success response
    res.json({
      loggedIn: true,
      user,
    })  
});


export default router;
