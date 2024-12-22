const express = require("express");
const {
  getPostController,
  postPostController,
} = require("../../controllers/post.controller");
const router = express.Router();

router.route("/").get(getPostController).post(postPostController);

module.exports = router;
