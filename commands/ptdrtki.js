const Discord= require("discord.js");

module.exports.help = {
    name: "ptdrtki"
}


module.exports.run = async (bot,message,args) =>{
    if(typeof message.guild.member(bot.user).nickname !== "string"){
        message.channel.send("Je suis "+bot.user.username+" !");
    }else{
        message.channel.send("Je suis "+message.guild.member(bot.user).nickname+" !");
    }
}
