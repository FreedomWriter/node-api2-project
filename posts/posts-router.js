const router = require("express").Router();

const Posts = require("../data/db");

router.get("", (req, res) => {
  Posts.find()
    .then(posts => res.status(200).json({ success: true, posts }))
    .catch(err => res.status(500).json({}));
});

router.post("", (req, res) => {
  if (req.body.title && req.body.contents) {
    Posts.insert(req.body)
      .then(postID => {
        Posts.findById(postID.id).then(post =>
          res.status(201).json({ success: true, post })
        );
      })
      .catch(err => {
        res.status(500).json({ success: false, err });
      });
  } else {
    res.status(400).json({
      success: false,
      errorMessage: "Please provide title and contents for the post."
    });
  }
});

module.exports = router;
