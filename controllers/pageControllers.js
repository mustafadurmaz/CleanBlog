const Post=require('../models/Post');

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.getPostPage = (req, res) => {
  res.render("post");
};

exports.getAddPost = (req, res) => {
  res.render("add_post");
};

exports.getPostsPage = async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
};

exports.getEditPage = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    res.render('edit', {
      post,
    });
  };
