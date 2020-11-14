const Discord= require("discord.js");

module.exports.help = {
    name: "help"
}


module.exports.run = async (bot,message,args) =>{
    let msg
    if (args[0]===undefined || args[0]==='1') {
      let joinEmbed = new Discord.MessageEmbed()
      .setColor("#ffff00")
      .setDescription("**-- Liste des commandes disponibles --**")
      .addField("**.help**","affiche ce menu")
      .addField("**.8ball <question>**","apporte une réponse positive ou négative à tes plus grandes questions")
      .addField("**.banchamp**","affiche les champions LoL les plus bannis ce patch")
      .addField("**.elo <pseudo>**","affiche l'elo du joueur de LoL mentionné")
      .addField("**.topchamp**","affiche les champions LoL aux meilleurs winrates ce patch ")
      .addField("**.ptdrtki**","me fait me présenter")
      .addField("**.wr <pseudo>**","affiche le winrate ranked du joueur de LoL mentionné")
      .setFooter("La suite arrive bientôt...")
      msg=joinEmbed
    }


    message.channel.send(msg);






}
