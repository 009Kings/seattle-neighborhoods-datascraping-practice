var express = require("express");
var router = express.Router();

router.get("/", (req, res)=>{
  res.send("Let's go esplorin'");
})

module.exports = router;