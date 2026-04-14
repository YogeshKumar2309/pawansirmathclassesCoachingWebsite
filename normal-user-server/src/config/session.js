// config/session.js - FIXED
import session from "express-session";
import dotenv from "dotenv";
import MongoStore from "connect-mongo";

dotenv.config();

// ✅ Check both MONGO_URI_PROD and MONGO_URI (same as db.js)
const MONGO_URI = process.env.MONGO_URI_PROD || process.env.MONGO_URI;
const SESSION_SECRET = process.env.SESSION_SECRET;

// ✅ Validate before creating store
if (!MONGO_URI) {
  console.error("❌ ERROR: MONGO_URI/MONGO_URI_PROD not defined!");
  throw new Error("MongoDB URI is required for session store");
}

if (!SESSION_SECRET) {
  console.error("❌ ERROR: SESSION_SECRET not defined!");
  throw new Error("SESSION_SECRET is required");
}

const sessionConfig = session({
  name: "sid",
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: MONGO_URI, // ✅ Now uses MONGO_URI_PROD from Render
    collectionName: "sessions",
    touchAfter: 24 * 3600, // Update session after 24 hours of inactivity
  }),
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  },
});

console.log("✅ Session configured successfully");

export default sessionConfig;