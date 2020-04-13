const Discord = require('discord.js');
const config = require("../config.json");
const https = require('https');


module.exports = {
    unmigrated: function(message, msg){
        var args = msg.split(',');
        var lista = [];
        var msg = message.content;
        for(let i=0, len=args.length; i<len; i++){
            var strings = args[i].split(':');
            var cuenta = strings[0]+':'+strings[2]+':'+strings[1];
            lista.push(cuenta);

        }
        message.channel.send(lista);
    },
    checker: function(message, msg){
        var args = msg.split(',');
        var lista = [];
    
        for(let i=0, len=args.length; i<len; i++){
            var strings = args[i].split(':');

            https.get('https://api.mojang.com/users/profiles/minecraft/'+strings[0], (resp) => {
                let data = '';
              
                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                  data += chunk;
                });
              
                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                  console.log(JSON.parse(data).explanation);
                });
              
              }).on("error", (err) => {
                console.log("Error: " + err.message);
              });


            var cuenta = strings[0]+':'+strings[2]+':'+strings[1];
            lista.push(cuenta);

        }
        message.channel.send(lista);
    }
};