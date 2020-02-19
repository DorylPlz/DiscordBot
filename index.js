const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const https = require("http");
//var steamAPI = require('apis/steamapi.js');

const token = process.env.TOKEN;

const steamKey = process.env.STEAM;

const PREFIX = '';

var servers = {};

bot.on('ready', () =>{
    console.log('Bot online');
})

bot.on('message', message =>{
    
    let args = message.content.substring(PREFIX.lenght).split("");

    var msg = message.content.toLowerCase();

    if (message.author.bot){
        if (message.author.id == "261302296103747584"){
            if (msg.includes("Critical Fail!")){
                message.react('😢'); 
                message.react('🇫');
                message.channel.sendMessage('Uhhh, F');
            }else{
                return;
            }
        }else{
            return;
        }
    };

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
//Respuestas
    if (msg.includes("uwu")){
        message.channel.sendMessage('OwO');
    }
    if (msg.includes("owo")){
        message.channel.sendMessage('UwU');
    }
    if (msg.includes("420")){
        var x = Math.floor((Math.random() * 2) + 1);
        switch (x) {
            case 1:
                message.channel.send("Lit", {files: ["https://i.imgur.com/KPNDAoN.png"]});
            break;
            case 2:
                message.channel.send("Lit", {files: ["https://i.imgur.com/iLuAMzc.png"]});
            break;
        }
        
    }
    if (msg.includes("weon")){
        message.channel.sendMessage('Aprende a insultar hueon');
    }



//Easter eggs
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
    if (msg.includes("foto")){
        message.channel.send("Que foto?", {files: ["https://pbs.twimg.com/media/DmcpEsPX4AEzs7X.jpg"]});
    }





//Memes
    if (msg.includes("/comunista")){
        
        var x = Math.floor((Math.random() * 2) + 1);
        switch (x) {
            case 1:
                message.channel.send("Comunista culiao", {files: ["https://i.imgur.com/TN5Zo3a.png"]});
            break;
            case 2:
                message.channel.send("", {files: ["https://i.imgur.com/6hJJZ3s.jpg"]});
            break;
        }
    }
    if (msg.includes("/paty")){
        message.channel.send("paty nazi paty nazi", {files: ["https://i.imgur.com/coiFuaH.png"]});
    }
    if (msg.includes("/darpel")){
        var x = Math.floor((Math.random() * 4) + 1);
        switch (x) {
            case 1:
                message.channel.send("Culiao que tenia que mandar el meme menos meme de el, darpel culiao", {files: ["https://i.imgur.com/oMnWjeb.png"]});
            break;
            case 2:
                message.channel.send("", {files: ["https://i.imgur.com/6qg3C9G.jpg"]});
            break;
            case 3:
                message.channel.send("Darpel nazi", {files: ["https://i.imgur.com/rBaj2Os.jpg"]});
            break;
            case 4:
                message.channel.send("Darpel no homo", {files: ["https://i.imgur.com/D5k3cST.jpg"]});
            break;
        }
    }
    if (msg.includes("/mosh")){
        
        var x = Math.floor((Math.random() * 2) + 1);
        switch (x) {
            case 1:
                message.channel.send("darilo mosh darilo mosh", {files: ["https://i.imgur.com/3iwQ72T.jpg"]});
            break;
            case 2:
                message.channel.send("", {files: ["https://i.imgur.com/7EaGfBp.jpg"]});
            break;
        }
    }
    if (msg.includes("/clucho")){
        var x = Math.floor((Math.random() * 2) + 1);
        switch (x) {
            case 1:
                message.channel.send("ermanito teni falopa? me funaron ermanito", {files: ["https://i.imgur.com/grGXM4O.jpg"]});
            break;
            case 2:
                message.channel.send("", {files: ["https://i.imgur.com/JDSgGa1.jpg"]});
            break;
        }
        
    }
    if (msg.includes("/hernan")){
        var x = Math.floor((Math.random() * 2) + 1);
        switch (x) {
            case 1:
                message.channel.send("Gotta go fast", {files: ["https://i.imgur.com/aTC5xzZ.jpg"]});
            break;
            case 2:
                message.channel.send("", {files: ["https://i.imgur.com/Et3IFPI.jpg"]});
            break;
        }
        
    }

    if(message.channel.id == "675043690921852928"){
        if (msg == "."){

            var options = {
                host: 'api.steampowered.com',
                port: 80,
                path: '/IPlayerService/GetOwnedGames/v0001/?key='+steamKey+'&steamid=76561198021608065&format=json&include_appinfo=true',
                method: 'GET'
            }
    
            callback = function(response){
    
            }
            var games = https.request(options, function(res){
                var body = '';
    
                res.on('data', function(chunck){
                    body += chunck;
                });
                res.on('end', function(){
                    var res = JSON.parse(body);
                    var response = res['response'];
                    var games = response['games'];
                    console.log(games);
                    
                    
    
                    
                })
            }).end();
    
    
    
    
    
    
            //message.channel.sendMessage(games);
        }
    
    }
    
    

})

bot.login(token);
