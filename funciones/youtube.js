const ytdl = require('ytdl-core');
const config = require("../config.json");

function reproducirCancion(message){

    if(message != null){
        if(message.guild.voiceConnection){
            if(message.member.voiceChannel){
                message.member.voiceChannel.join().then(function(connection){
            
                    var url = message;
                    connection.playStream(ytdl(url, {filter: "audioonly"}));
        
            })
            }else{
                console.log("No está conectado el usuario");
            }
        }else{
            console.log("No está conectado el usuario");
        }
    }else{
        console.log("Indique una URL");
    }
               
}
module.exports = { reproducirCancion }