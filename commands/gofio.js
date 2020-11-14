const Discord= require("discord.js");

module.exports.help = {
    name: "gofio"
}



module.exports.run = async (bot,message,args) =>{

    var tId = [];
    var tP = [];
    var ended= false;
    var senderid=message.author.id;
    var sendergm=message.guild.member(senderid)
    var data = sendergm.voice.channel.members.firstKey(100)
    var chan=message.channel;
    var lastMessage=message.content;
    var nbUsers = data.length;


    function verif(){
        var count
        tP.forEach(element => {
            if(element===false){
                count++
            }
        });
        if (count===1){
            return true;
        }else{
            return false;
        }
    }
    


    data.forEach(element => {
        tId.push(element);
        if(element===senderid){
            tP.push(true);
        }else{
            tP.push(false);
        }
    });



    const filter = m => m.content.startsWith('gofio');

    chan.awaitMessages(filter, { max: nbUsers, time: 10000, errors: ['time'] })
    .then(collected => console.log(collected.size))
    .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`));



    // while(!ended){
    //     console.log(chan.lastMessage);
    //     if(lastMessage!==chan.lastMessage.content){
    //         console.log("test")
    //         lastMessage=chan.lastMessage;
    //         if(lastMessage.content=="gofio"){
    //             let id =tID.IndexOf(lastMessage.author.id);
    //             tP[id]=true;
    //             console.log(tP)
    //         }
    //         ended=verif();
    //     }
    // }

    console.log()

    var members

}
