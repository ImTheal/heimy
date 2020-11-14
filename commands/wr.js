const Discord= require("discord.js");

module.exports.help = {
    name: "wr"
}
const cheerio = require('cheerio');
const request = require('request');



module.exports.run = async (bot,message,args) =>{
    var urls = [];
    
    if (args.length<1){
        message.channel.send("Pas de joueur mentionné, pas de winrate donné");
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



    request(lien, function(err,resp,body) {
        console.log(resp.statusCode)
        if(!err && resp.statusCode == 200)
        {
            var chaine="";
            var $ = cheerio.load(body);
            $('.WinLose').each(function(){
                var url = $(this).text();
                url = url.replace(/([^0-9])/gi,"");
                urls.push(url);
                chaine=url;
                
            });
            if(chaine==""){
                message.channel.send("Ce joueur ne joue pas en ranked :(");
                return;
            }
            var nbgames= parseInt(chaine.slice(0,2),10)+parseInt(chaine.slice(2,4),10);
            var ratio=chaine.slice(4,6);
    
            message.channel.send(pseudo+" a "+ratio+"% de win rate sur "+nbgames+" games");
        }else{
            message.channel.send("Erreur "+resp.statusCode+" réessayez plus tard" )
        }  

    });




}


