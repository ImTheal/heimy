const Discord= require("discord.js");

module.exports.help = {
    name: "8ball"
}

var reps = [
'Oui',
'C\'est certain',
'Absolument',
'Évidemment',
'Bonne question',
'J\'en sais pas plus que toi',
'Non',
'Tu rêves',
'Négatif',
'Même pas un peu'
]

var colors = [
    '#008000',
    '#ffff00',
    '#ff0000'
]


module.exports.run = async (bot,message,args) =>{
    if(args.length==0){
        message.channel.send("Pas de question, pas de réponse");
        return;
    }

    let rep = Math.floor((Math.random() * reps.length*10)/10 + 1);
    let col;
    if(rep<5){
        col=colors[0];
    }else if(rep<7){
        col=colors[1];
    }else{
        col=colors[2];
    }

    let joinEmbed = new Discord.MessageEmbed()
        .setColor(col)
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription("  :question: Question :\n"+args.join(" ")+"\n"+"\n  :8ball: Réponse :\n"+reps[rep-1])

    message.channel.send(joinEmbed)



}