var express = require("express");
var router = express.Router();

router.get("/", (req, res)=>{
  res.render("index");
})

router.get("/:idx", (req, res)=>{
  res.render("show", {hoodId: req.params.idx});
})

module.exports = router;