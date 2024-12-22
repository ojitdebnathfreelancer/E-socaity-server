const User = require("../schema/user");

module.exports.createUserService = async (userData) => {
  const result = await User.create(userData);
  return result;
};

module.exports.loginUser = async (userData) => {
  const result = await User.findOne(userData, {
    password: 0,
    confirmPassword: 0,
  });
  return result;
};
