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
const texto = require("./funciones/texto.js");
const test = require("./funciones/test.js");
const lenin = require("./funciones/lenin.js");

const configApp = config.app;

const token = process.env.TOKEN;//configApp.token;//
const steamKey = process.env.STEAM;//configApp.steam;//
const PREFIX = process.env.PREFIX//configApp.prefix;


bot.on('ready', () =>{
    console.log('Bot online');
    al_func.checkAlarmas();
})

bot.on('message', message =>{
    

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
    if (message.author.id == "322570246303252481"){
        var x = Math.floor((Math.random() * 100) );
        var porcentaje = 5;
        if(x == 1){
            lenin.reculiao(message);
        }else if(x < porcentaje){
            lenin.culiao(message);
        }else if(message.content == "umongus" || message.content == "among us" || message.content == "amongas" || message.content == "umungus" || message.content == "amongos" || message.content == "sus"){
            lenin.AmongUs(message);
        }
    };

    if(message.channel.id == "514929154555117608"){
        reacts.memealert(message);
    }
    if (msg.includes(" 69 ")){
        reacts.reacts(msg, message);
    }


//alarma
    if (msg.includes("/alarma")){
        al_func.alarma(message);
    }

//Memes
    if(message.content == "/comunista" || message.content == "/paty" || message.content == "/darpel" || message.content == "/mosh" || message.content == "/comunista" || message.content == "/clucho" || message.content == "/hernan" || message.content == "tomas" || message.content == "tomás"){
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
