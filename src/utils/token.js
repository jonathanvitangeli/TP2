import jwt from "jsonwebtoken";

export const gentoken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};
