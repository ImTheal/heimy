const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./storage/config.json");
const words = require("./storage/words.json");
const fs = require('fs');

bot.commands = new Discord.Collection();


bot.login(process.env.TOKEN);

fs.readdir("./commands/", (err, f) => {
  if (err) console.log(err);
  var jsFiles = f.filter(f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0){
    console.log("pas de commandes :/")
    return;
  }
  jsFiles.forEach((f,i)=>{
    var fileGet= require("./commands/"+f);
    console.log("Fichier de commande "+ f + " récupéré avec succès !");
    bot.commands.set(fileGet.help.name, fileGet);
  });
})


bot.on("ready", async() =>{
  console.log(" ");
  console.log("Connecté en tant que "+ bot.user.tag);
  bot.user.setStatus('fais .help pour avoir de l\'aide')

});


bot.on("message",message =>{
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  var prefix=config.prefix;
  var messageArray = message.content.split(" ");
  var command = messageArray[0];
  var args = messageArray.slice(1);
  var commands= bot.commands.get(command.slice(prefix.length));
  if(commands) commands.run(bot,message,args);
});


function includesRealy(msg,str){
  let msg2=msg.content.toUpperCase();
  return(
    msg2.includes(str.toUpperCase())
  )
}



bot.on('message',message =>{
  for(let el of words.hello){
    if(message.content.toLowerCase()===el && message.author.username != bot.user.username && !includesRealy(message,'.')){
      if(typeof message.guild.member(message.author).nickname !== "string"){
        message.channel.send("Salut "+message.author.username+" !");
      }else{
        message.channel.send("Salut "+message.guild.member(message.author).nickname+" !");
      }
      break;
    }
  }
});


bot.on('message',message =>{

});


bot.on('message',message =>{
  if((includesRealy(message,'fils de')||includesRealy(message,'fdp' )&& !includesRealy(message,".")))message.reply("Pas besoin de remonter l'arbre généalogique !");
});







// bot.on("message",message =>{
//   if (!message.guild) return
//   if (message.content === prefix + "hello"){
//     message.channel.send("Bonjour "+message.author.username+" !");
//   }

//   if (message.content === prefix + "email"){
//     message.channel.send("Ton email Discord est : j'en sais rien");
//   }

//   if (message.content === prefix + "savatwa?"){
//     message.channel.send("Très bien ! Je m'en fous que toi ça aille ^^");
//   }

//   if (message.content === prefix + "pd"){
//     message.channel.send("Alors non, mais je peux te présenter mes amis");
//   }

//   if (message.content === prefix + "okgoogle"){
//     message.channel.send("Euh soyons clair "+message.author.username+", moi c'est pas Google, c'est "+bot.user.username );
//   }


// });
