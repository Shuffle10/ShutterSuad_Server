import jsonwebtoken from "jsonwebtoken";
import User from "../models/models.js";

const requireAuth = async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jsonwebtoken.verify(token, process.env.SECRET);
    request.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    response.status(401).json({ error: "Not Authorized" });
  }
};

export default requireAuth;
