var request = require("request");
var cheerio = require("cheerio");

request("https://www.visitseattle.org/things-to-do/neighborhoods/", (error, response, body)=>{
  console.log(body);
});