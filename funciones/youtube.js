const ytdl = require('ytdl-core');
const config = require("../config.json");

function reproducirCancion(message){
     if(message != null){
        if(message.member.voiceChannelID){

            const url = message.content.split(" ")[1];
            if(url != null && url != ''){ 
                message.member.voiceChannel.join().then(function(connection){
                    connection.playStream(ytdl(url, {filter: "audioonly"}));
                })
            }else{
                message.reply('Oye wn, indica una url');
            }
            
        }else{
            console.log("Voiceconnection");
        } 

    }else{
        console.log("Indique una URL");
    } 

               
}
function pararCancion(message){
    message.guild.me.voiceChannel.leave();
}
module.exports = { reproducirCancion, pararCancion }