import jwt from "jsonwebtoken";

const checkAuth = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.json({ success: false, message: "Token not found." });
    }
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userData = { userId: decodeToken.userId };
    next();
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default checkAuth;
