import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import sessionConfig from "./config/session.js";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";

import isAuth from "./middlewares/isAuth.middleware.js";
import roleCheck from "./middlewares/roleCheck.middleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// ✅ CORS URL list
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? process.env.CORS_URL_PROD.split(",")
    : process.env.CORS_URL_DEV.split(",");

app.set("trust proxy", 1); // 🔥 Render ke liye MUST

connectDB();

// CORS (FIXED)
app.use(
  cors({
    origin: (origin, callback) => {
      // allow server-to-server / postman / render health check
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(null, false); // ❌ error throw mat karo
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);



app.use(express.json());
app.use(sessionConfig);

// Routes
app.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

app.use("/v1/auth", authRoutes);
app.use("/v1/user", userRoutes);
app.use("/v1/admin", isAuth, roleCheck("admin"), adminRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


