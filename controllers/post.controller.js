const Post = require("../schema/post");
const { postPostService, getPostService } = require("../services/post.service");

module.exports.getPostController = async (req, res, next) => {
  try {
    const posts = await getPostService();
    res.status(200).send({
      status: "Success",
      message: "Successfully get all posts",
      data: posts,
    });
  } catch (error) {
    res.status(400).send({
      status: "Failed",
      message: "Post could't post",
    });
  }
};

module.exports.postPostController = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await postPostService({ ...data, img: data?.photo });

    res.status(200).send({
      status: "Success",
      message: "Successfully post",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "Failed",
      message: "Post could't post",
      error: error.message,
    });
  }
};
