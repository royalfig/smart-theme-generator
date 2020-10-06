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
  const { tag1, tag2, tag3, tag4, tag5, featured } = req.body;
  const template = renderTemplate(featured, [tag1, tag2, tag3, tag4, tag5]);
  res.render("index", { title, tag1, tag2, tag3, tag4, tag5, template });
});

module.exports = router;
