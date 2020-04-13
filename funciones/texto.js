const Discord = require('discord.js');
const config = require("../config.json");

function unmigrated(message, msg){
    var args = msg.split(',');
    var lista;
    for(let i=0, len=args.length; i<len; i++){
        lista.push(args[i]);
    }
    message.channel.send(lista);
};


module.exports = {
    unmigrated: function(message, msg){
        var args = msg.split(',');
        var lista = [];
        
        for(let i=0, len=args.length; i<len; i++){
            var strings = args[i].split(':');
            var cuenta = strings[0]+':'+strings[2]+':'+string[1];
            lista.push(cuenta);

        }
        message.channel.send(lista);
    }
    
};