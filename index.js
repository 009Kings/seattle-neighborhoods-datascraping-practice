var express = require("express");
var app = express();
var router = express.Router();
var layouts = require("express-ejs-layouts");
// var methodOverride = require("method-override") // for Deletin'

app.set("view engine", "ejs");

app.use(layouts);
// app.use(methodOverride("_method")); // for DOING WHAT WE WANT even if HTTP is a butt about it
app.use("/explore", require("./controllers/explore"));
// app.use("/admin", require("./controllers/admin")); // For addin' deletin' and editin'

// Routes
app.get("/", (req, res)=>{
  res.render("home");
  // res.render("home");
})

app.listen("3000", () => {
  console.log("You're listening to the ♨︎ smooth sounds of port 3000 ♨︎");
});