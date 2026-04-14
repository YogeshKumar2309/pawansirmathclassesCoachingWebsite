

import express from "express";
import isAuth from "../middlewares/isAuth.middleware.js";
import userIsAuth from "./userIsAuth.route.js"
import roleCheck from "../middlewares/roleCheck.middleware.js";



const router = express.Router();

router.get("/", (req,res) => {
    res.json({message: "User route"})
});

router.use("/profile", isAuth, roleCheck("user", "admin"), userIsAuth)



export default router;
