const Discord= require("discord.js");

module.exports.help = {
    name: "banchamp"
}
const cheerio = require('cheerio');
const request = require('request');



module.exports.run = async (bot,message,args) =>{
    var urls = [];
    var wrs=[];

    if (args.length>0){
        message.channel.send("Pas d'arguments après .topchamp !");
        return;
    }



    var lien = "https://www.leagueofgraphs.com/";

    lien=encodeURI(lien);


    request(lien, function(err,resp,body) {
        if(!err && resp.statusCode == 200)
        {
            var $ = cheerio.load(body);
            $('.championName').each(function(){
                var url = $(this).text();
                urls.push(url);
            });
            var champs = [];
            var i=0;
            urls.forEach(element => {
                
                if(i>=0 && i<5){
                    champs.push((i+1)+". "+element.replace(/ |\n/gi,""));
                }
                i++;
            }); 
            

            let joinEmbed = new Discord.MessageEmbed()
            .setColor('#00d2ff')
            .setAuthor("Les champions les plus bannis du patch sont :")
            .setDescription(champs)
    
            message.channel.send(joinEmbed)
        }
        

    });




}


