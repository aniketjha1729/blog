const Post = require("../models/post");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

exports.createPost = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, file) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        errors: [{ msg: "Problem with file" }],
      });
    }
    const { content, title } = fields;
    if (!content || !title) {
      return res.status(400).json({
        errors: [{ msg: "Content Required" }],
      });
    }
    let post = new Post(fields);
    post.postedBy = req.user._id;
    if (file.photo) {
      if (file.photo.size > 300000) {
        return res.status(400).json({
          errors: "file is to big",
        });
      }
      post.photo.data = fs.readFileSync(file.photo.path);
      post.photo.contentType = file.photo.type;
    }
    post.save((err, post) => {
      if (err) {
        return res.status(400).json({
          errors: "saving failed",
        });
      }
      res.json(post);
    });
  });
};

exports.getAllPost = (req, res) => {
  Post.find()
    .populate("postedBy", "_id name")
    .then((posts) => {
      return res.status(200).json(posts);
    })
    .catch((err) => console.log(err));
};

exports.getPostById = (req, res) => {
  Post.findById({ _id: req.params.postId })
    .then((post) => {
      if (!post) {
        res.status(404).json({ message: "no post found" });
      }
      res.status(200).json(post);
    })
    .catch((err) => console.log(err));
};

exports.photo = (req, res) => {
  Post.findById({ _id: req.params.postId }).then((post) => {
    if (post.photo.data) {
      res.set("Content-Type", post.photo.contentType);
      return res.send(post.photo.data);
    }
  });
};
