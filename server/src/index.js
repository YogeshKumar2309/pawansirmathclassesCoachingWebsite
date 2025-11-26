import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
connectDB();

// Middleware

app.use(cors({
  origin: "http://localhost:5173", // Vite dev server ka default port
  credentials: true,               // agar cookies/session use kar rahe ho
}));

app.use(express.json()); // JSON body parse karne ke liye

// Routes
app.get("/", (req, res) => {
    console.log(req.url);
    
  res.send("Server is running!");
});

// Register API
app.post("/v1/register", (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Normally yaha DB me save karte hai. Abhi demo ke liye:
  const newUser = { id: Date.now(), name, email, phone };

  return res.status(201).json({
    message: "User registered successfully",
    user: newUser,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
