const Discord= require("discord.js");
const riot = require("../storage/riot.json")
const fetch = require('node-fetch');
module.exports.help = {
    name: "player",
    args :[
        "nom d'invocateur"
    ],
    description: "Donne les infos de base du compte selectionné",
    status: "coming soon"
}


module.exports.run = async (bot,message,args) =>{

    console.log()

    fetch('https://github.com/')
    .then(res => res.text())
    .then(body => console.log(body));

    let msg= new Discord.MessageEmbed()
    .setColor("#ffff00")
    .setDescription("")    


    message.channel.send(msg);

}
