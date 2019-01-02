var request = require("request");
var cheerio = require("cheerio");

request("http://www.visitseattle.org/things-to-do/neighborhoods/", (error, response, body)=>{
  var $ = cheerio.load(body);
  var neighborhoods = $(".info-window-content").map((index, currentHood)=>{
    var photo = $(currentHood).find($(".info-window-content-image")).attr("style") || "none";
    return {
      name: $(currentHood).find("h4").text(),
      link: $(currentHood).find("a").attr("href"),
      photo: photo.slice(23, -2),
      discription: $(currentHood).find("p").text()
    }
  }).get();
  console.log(neighborhoods);
});