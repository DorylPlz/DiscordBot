const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const https = require("http");
const config = require("./config.json");
const al_func = require("./funciones/alarma.js");
const frases = require("./funciones/frases.js");
const memes = require("./funciones/memes.js");
const reacts = require("./funciones/reacts.js");
const steam = require("./funciones/steamapi.js");
const test = require("./funciones/test.js");

const configApp = config.app;
const token = configApp.token;//process.env.TOKEN;
const steamKey = configApp.steam;//process.env.STEAM;
const PREFIX = configApp.prefix;


bot.on('ready', () =>{
    console.log('Bot online');
    al_func.checkAlarmas();
})

bot.on('message', message =>{
    
    let args = message.content.substring(PREFIX.lenght).split("");

    var msg = message.content.toLowerCase();

//reacts
    if (message.author.bot){
        if (message.author.id == "261302296103747584"){
            if (msg.includes("Critical Fail!")){
                reacts.roll1(message);
            }else{
                return;
            }
        }else{
            return;
        }
    };

    if(message.channel.id == "514929154555117608"){
        reacts.memealert(message);
    }
    if (msg.includes("uwu") || msg.includes("owo") || msg.includes("420") || msg.includes("presion") || msg.includes("presión") || msg.includes("precion") || msg.includes("preción") || msg.includes("69")){
        reacts.reacts(msg, message);
    }


//alarma
    if (msg.includes("/alarma")){
        al_func.alarma(message);
    }

//Memes
    if(message.content == "/comunista" || message.content == "/paty" || message.content == "/darpel" || message.content == "/mosh" || message.content == "/comunista" || message.content == "/clucho" || message.content == "/hernan"){
        memes.list(message);
    }

//Steam test
    if(message.channel.id == "675043690921852928"){
        
        if (msg == "."){
            steam.compare(steamKey, message);
        }
    }
})

bot.login(token);
