var express = require('express');
//using just the Router constructor in express
var postRouter = express.Router();
var postRouter = express.Router();
//requiring the post controller
var postsController = require('../controllers/posts');
var newsController = require('../controllers/news');
//home page
postRouter.route("/")
	.get(postsController.index)
	.post(postsController.create);
postRouter.route("/:id")
	.get(postsController.show)
	.put(postsController.update)
	.delete(postsController.delete)
//new
postRouter.get("/new",postsController.new);
//Edit, hardest to remember...
postRouter.get("/:id/edit",postsController.show);

postRouter.get("/news/",newsController.index);
module.exports = postRouter;
