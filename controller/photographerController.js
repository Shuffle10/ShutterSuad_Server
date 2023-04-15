import User from "../models/models.js";

export const fetchUsers = async (request, response) => {
  try {
    let users = await User.find({});
    response.status(200).json(users);
  } catch (err) {
    response.status(404).json({ message: err.message });
  }
};

export const fetchUser = async (request, response) => {
  try {
    let user = await User.findById(request.params.id);
    response.status(200).json(user);
  } catch (err) {
    response.status(404).json({ message: err.message });
  }
};
