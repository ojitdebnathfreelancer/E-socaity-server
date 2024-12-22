const User = require("../schema/user");
const { createUserService, loginUser } = require("../services/user.service");

module.exports.createUser = async (req, res, next) => {
  try {
    const userData = new User(req.body);
    const result = await createUserService(userData);

    res.status(200).send({
      status: "Sucess",
      message: "Successfully created user",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "Faild",
      message: "User could't create",
      error: error.message,
    });
  }
};

module.exports.loginUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const resutl = await loginUser(userData);
    res.status(200).send({
      status: "Success",
      message: "Logging successfully",
      data: resutl,
    });
  } catch {
    res.status(400).send({
      status: "Faild",
      message: "User could't found",
      error: error.message,
    });
  }
};
