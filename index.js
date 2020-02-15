const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core');

const token = process.env.TOKEN;

const PREFIX = '';

var servers = {};

bot.on('ready', () =>{
    console.log('Bot online');
})

bot.on('message', message =>{
    
    let args = message.content.substring(PREFIX.lenght).split("");

    var msg = message.content.toLowerCase();

    if (message.author.bot) return;

    if(message.channel.id == "514929154555117608"){

        if(!message.member.voiceChannel){
            return;
        }

        if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
            var url = 'https://www.youtube.com/watch?v=u9o0DkInNls';
            connection.playStream(ytdl(url, {filter: "audioonly"}));

            setTimeout(timeout, 18000);
            function timeout(){
                connection.disconnect()
            }

        })
    }

    if (msg.includes("uwu")){
        message.channel.sendMessage('OwO');
    }

    if (msg.includes("owo")){
        message.channel.sendMessage('UwU');
    }


    if (msg.includes("presion")){
        message.channel.sendMessage('Lo dijo');
    }
    if (msg.includes("presión")){
        message.channel.sendMessage('Lo dijo');
    }
    if (msg.includes("precion")){
        message.channel.sendMessage('Lo dijo (Mal escrito, pedazo de mierda)');
    }
    if (msg.includes("preción")){
        message.channel.sendMessage('Lo dijo (Mal escrito, pedazo de mierda)');
    }

    if (msg.includes("69")){
        message.channel.sendMessage('Nice');
    }
    if (msg.includes("420")){
        message.channel.send("lit", {files: ["https://i.imgur.com/KPNDAoN.png"]});
    }

    if (msg.includes("/comunista")){
        message.channel.send("Comunista culiao", {files: ["https://i.imgur.com/TN5Zo3a.png"]});
    }
    if (msg.includes("/paty")){
        message.channel.send("paty nazi paty nazi", {files: ["https://i.imgur.com/coiFuaH.png"]});
    }
    if (msg.includes("/darpel")){
        message.channel.send("Culiao que tenia que mandar el meme menos meme de el, darpel culiao", {files: ["https://i.imgur.com/oMnWjeb.png"]});
    }
    if (msg.includes("mosh")){
        message.channel.send("darilo mosh darilo mosh", {files: ["https://i.imgur.com/3iwQ72T.jpg"]});
    }
})

bot.login(token);
