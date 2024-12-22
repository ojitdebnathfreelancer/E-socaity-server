const mongose = require("mongoose");
const validator = require("validator");

const postSchema = mongose.Schema(
  {
    text: {
      type: String,
    },
    img: {
      type: String,
      validate: [validator.isURL, "Please provide a valid img"],
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongose.model("Post", postSchema);

module.exports = Post;
