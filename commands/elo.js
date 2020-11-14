const Discord= require("discord.js");

module.exports.help = {
    name: "elo"
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



    var lienshort = "http://euw.op.gg/summoner/userName=";

    var pseudo=args[0];
    var lien =lienshort+pseudo;
    lien=encodeURI(lien);

    // request({
    //     uri: "http://www.sitepoint.com",
    //     method: "GET",
    //     timeout: 10000,
    //     followRedirect: true,
    //     maxRedirects: 10
    //   }, function(error, response, body) {
    //     console.log(body);
    //   });


    request(lien, function(err,resp,body) {
        
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
        if(rank==""){
            message.channel.send("Ce joueur ne joue pas en ranked :(");
            return;
        }
        message.channel.send(pseudo+" est "+rank);


        

    });




}


