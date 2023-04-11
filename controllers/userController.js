import Users from "../models/userModel.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

const getCurrentUser = async (req, res, next) => {
  try {
    const user = await Users.findById(req.userData.userId).select("-password");
    res.json({ success: true, message: "UserData fetched.", userData: user });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const signupUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await Users.findOne({ email });

    if (user) {
      return res.json({ success: false, message: "user already exist." });
    }

    const hashedPassword = await argon2.hash(password);

    const newUser = await new Users({
      name,
      email,
      password: hashedPassword,
    }).save();

    res
      .status(200)
      .json({
        success: true,
        message: "Registered successfully. Please login.",
      });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "Email is not registered." });
    }

    const passwordMatch = await argon2.verify(user.password, password);

    if (!passwordMatch) {
      return res.json({ success: false, message: "Wrong password." });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      userId: user._id,
      token,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { signupUser, loginUser, getCurrentUser };
