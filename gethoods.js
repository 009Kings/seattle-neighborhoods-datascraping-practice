var request = require("request");
var cheerio = require("cheerio");
var db = require("./models");

request("http://www.visitseattle.org/things-to-do/neighborhoods/", (error, response, body)=>{
  var $ = cheerio.load(body);
  var neighborhoods = $(".info-window-content").map((index, currentHood)=>{
    var photo = $(currentHood).find($(".info-window-content-image")).attr("style") || "none";
    return {
      name: $(currentHood).find("h4").text(),
      link: $(currentHood).find("a").attr("href"),
      photo: photo.slice(23, -2),
      description: $(currentHood).find("p").text()
    }
  }).get()

  neighborhoods.forEach((hood)=>{ 
    db.hood.create({
      name: hood.name,
      link: hood.link,
      photo: hood.photo,
      description: hood.description
    }).then((data)=>{
      console.log(`Added ${data.name}`);
    }).catch((err)=>console.log(`Bad news bears, you fucked up ${err}`))
  });
});