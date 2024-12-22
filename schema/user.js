const mongose = require("mongoose");
const validator = require("validator");

const userSchema = mongose.Schema({
  name: {
    type: String,
    required: true,
    min: [2, "Minimum tow charcters"],
    max: [30, "Max 30 characters"],
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Please provide a vaild email"],
  },
  img: {
    type: String,
    required: true,
    validate: [validator.isURL, "Please provide a vaild img"],
  },
  password: {
    type: String,
    required: [true, "Please write a password"],
    validate: {
      validator: (value) => {
        validator.isStrongPassword(value, {
          minLength: 8,
          maxLength: 30,
          minLowercase: 2,
          minUppercase: 1,
          minNumber: 1,
          minSymbols: 1,
        });
      },
      message: "Password (VALUE) is not strong",
    },
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Password didn't match",
    },
  },
  roel: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const User = mongose.model("User", userSchema);

module.exports = User;
