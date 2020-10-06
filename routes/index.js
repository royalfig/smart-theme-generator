const express = require("express");
const router = express.Router();

const { title } = require("../metadata/metadata");
const renderTemplate = require("../utils/renderTemplate");
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {
    title,
    tag1: "",
    tag2: "",
    tag3: "",
    tag4: "",
    tag5: "",
    template: "",
    featured: false,
  });
});

router.post("/", (req, res) => {
  const { tag1 } = req.body;
  const { tag2 } = req.body;
  const { tag3 } = req.body;
  const { tag4 } = req.body;
  const { tag5 } = req.body;
  const template = renderTemplate(tag1, tag2, tag3, tag4, tag5);
  res.render("index", { title, tag1, tag2, tag3, tag4, tag5, template });
});

module.exports = router;
