var express = require("express");
var router = express.Router();

router.get("/", (req, res)=>{
  res.send("Let's go esplorin'");
})

router.get("/:idx", (req, res)=>{
  res.send(`You are looking at Neighborhood ${req.params.idx}`);
})

module.exports = router;