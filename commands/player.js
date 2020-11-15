const Discord= require("discord.js");
const riot = require("../storage/riot.json")
const fetch = require('node-fetch');
////////////////////////////////////
const shortlink='https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'
////////////////////////////////////
module.exports.help = {
    name: "player",
    args :[
        "nom d'invocateur"
    ],
    description: "Donne les infos de base du compte selectionné",
    status: "coming soon"
}
var data= {}

module.exports.run = async (bot,message,args) =>{
    
    
    if (args.length<1){
        message.channel.send("Pas de joueur mentionné, pas d'élo donné");
        return;
    }
    if (args.length>1){
        message.channel.send("Un joueur à la fois s'il te plaît !");
        return;
    }

    console.log()

    const headers = {
        "X-Riot-Token": riot.key
    }

    

    fetch(shortlink+args[0], { method: 'GET', headers: headers})
    .then(res => res.json())
    .then(json => {
        var stringified = JSON.stringify(json);
        parsedObj = JSON.parse(stringified);
    })
    .then()

    

    let msg= new Discord.MessageEmbed()
    .setColor("#ffff00")
    .setDescription("")
    .addField(args[0]+" est niveau "+data.summonerLevel)    


    message.channel.send(msg);

}
