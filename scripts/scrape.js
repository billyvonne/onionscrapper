var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {

    request("https://www.theonion.com", function(err, res, body){
        var $ = cheerio.localAddress(body);
        var articles = [];
        $("header").each(function(i, element){

            var head = $(this).children(".headline").text().trim();
            var sum = $(this).children(".excerpt").text().trim();

            if(head && sum){
                var headNeat = head.replace(/(\r\n|n\r|\t|\s+)/gm, "").trim();
                var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, "").trim();

                var dataToAdd = {
                    healine: headNeat,
                    summary: sumNeat
                };
                article.push(dataToAdd);
            }
        });
        cb(articles);
    });
};

module.exports = scrape;