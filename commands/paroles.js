const Discord= require("discord.js");

module.exports.help = {
    name: "paroles"
}
const cheerio = require('cheerio');
const request = require('request');



module.exports.run = async (bot,message,args) =>{
    var urls = [];
    if (args.length>0){
        message.channel.send("Pas d'arguments après .topchamp !");
        return;
    }



    var lien = "https://genius.com/Lomepal-yeux-disent-lyrics";

    lien=encodeURI(lien);


    request(lien, function(err,resp,body) {
        console.log(body);
        if(!err && resp.statusCode == 200)
        {
            var $ = cheerio.load(body);
            $('p').each(function(){
                var url = $(this).text();
                urls.push(url);
            });

            console.log(urls);     
        }

    });




}


