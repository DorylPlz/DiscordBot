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

})

bot.login(token);
