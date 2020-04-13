
const config = require("../config.json");

function unmigrated(message, msg){
    var args = msg.split(',');
    var lista;
    for(let i=0, len=args.length; i<len; i++){
        lista.push(args[i]);
    }
    message.channel.send(lista);
};