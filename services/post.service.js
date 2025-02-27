const Post = require("../schema/post");

module.exports.getPostService = async () => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  return posts;
};

module.exports.postPostService = async (data) => {
  const post = await Post.create(data);
  return post;
};
