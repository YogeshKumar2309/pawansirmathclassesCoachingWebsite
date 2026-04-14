import User from "../models/user.model.js";
import bcrypt from "bcrypt";

//Register + auto login
export const register = async (req, res) => {
  console.log(req.body);

  const { name, phone, email, password } = req.body;

  // 1️⃣ Email OR Phone check
  const existingUser = await User.findOne({
    $or: [{ email }, { phone }],
  });

  if (existingUser) {
    return res.status(409).json({
      message:
        existingUser.email === email
          ? "Email already registered"
          : "Phone number already registered",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    phone,
    password: hash,
  });

  //* session create (auto login)
  req.session.user = {
    id: user._id,
    role: user.role,
  };
  console.log(user);
  res.json({
    message: "Registered & Logged In",
    user: {
      id: user._id,
      name: user.name,
      phone: user.phone,
      email: user.email,
      role: user.role,
    },
  });
};

//login
export const login = async (req, res) => {
  const { email, password } = req.body;
   // 1️⃣ Email OR Phone check
  const user = await User.findOne({
    $or: [{ email }, { phone : email }],
  });


  if (!user) return res.status(401).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Wrong password" });

  //session create
  req.session.user = {
    id: user._id,
    role: user.role,
  };

  res.json({
    message: "login successful",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
};

//Logout
export const logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out" });
  });
};
