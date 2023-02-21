const userController = {};
const User = require("../schemas/user");

userController.newUser = async (req, res) => {
  console.log("body", req.body.username);
  // create a new user
  const user = new User({
    username: req.body.username,
  });
  try {
    const newUser = await user.save();
    res.status(201).json({
      username: newUser.username,
      _id: newUser._id,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
userController.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = userController;
