const Discord= require("discord.js");

module.exports.help = {
    name: "rito"
}
const cheerio = require('cheerio');
const request = require('request');



module.exports.run = async (bot,message,args) =>{
    var urls = [];
    
    if (args.length<1){
        message.channel.send("Pas de joueur mentionné, pas d'élo donné");
        return;
    }
    if (args.length>1){
        message.channel.send("Un joueur à la fois s'il te plaît !");
        return;
    }



    let options = {
        url: "euw1.api.riotgames.com",
        method: 'GET',
        APIKEY:"RGAPI-d0323eaa-f4a2-4a12-8c18-6ceea3bae0c4"
    }

    request(options,lien, function(err,resp,body) {
        
        if(!err && resp.statusCode == 200)
        {
            var $ = cheerio.load(body);
            $('.TierRank').each(function(){
                var url = $(this).text();
                urls.push(url);
            });

            $('.LeaguePoints').each(function(){
                var url = $(this).text();
                urls.push(url);
            });
            
            console.error('error:', err); // Print the error if one occurred
            console.log('statusCode:', resp && resp.statusCode); // Print the response status code if a response was received
            // console.log('body:', body); // Print the HTML for the Google homepage.
        }
        var rank=""
        urls.forEach(element => {
            rank+=element.replace(/( |\n+\t+)/g,"")+" ";
        });

        message.channel.send(pseudo+" est "+rank+"\n"+lien);


        

    });




}


