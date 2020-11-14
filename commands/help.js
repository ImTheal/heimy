const Discord= require("discord.js");

module.exports.help = {
    name: "help",
    args:[],
    description: "affiche ce menu d'aide",
    status: "available"
}


module.exports.run = async (bot,message,args) =>{

    let msg= new Discord.MessageEmbed()
    .setColor("#ffff00")
    .setTitle("**-- Liste des commandes disponibles ("+this.help.numberOfCommands+") --**")
    .setFooter("La suite arrive bientôt...")
    let argsPart=""

    for(let com of bot.commands){
      cmd=com[1].help
      cmd.args.forEach(arg => {
        argsPart+=" <"+arg+">"
      });

      if(cmd.status=="available"){
        msg.addField("**"+cmd.name+"**"+argsPart,cmd.description)
      }
    }
    


    message.channel.send(msg);






}
