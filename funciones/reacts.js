module.exports = {
    roll1: function(message){
        message.react('😢'); 
        message.react('🇫');
        message.channel.send('Uhhh, F');
    },
    memealert: function(message){
        message.react('😩'); 
        message.react('👌');
        message.react('💯');
        message.react('🔥');
        message.channel.send('Alerta de meme *Sonido de nuke de cod*');
    },
    reacts: function(msg, message){
        if(msg.includes("uwu")){
            message.channel.send('OwO');
        }
        if(msg.includes("owo")){
            message.channel.send('UwU');
        }
        if(msg.includes("420")){
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
        if(msg.includes("presion")){
            message.channel.send('Lo dijo');
        }
        if(msg.includes("presión")){
            message.channel.send('Lo dijo');
        }
        if(msg.includes("precion")){
            message.channel.send('Lo dijo (Mal escrito, pedazo de mierda)');
        }
        if(msg.includes("preción")){
            message.channel.send('Lo dijo (Mal escrito, pedazo de mierda)');
        }
        if(msg.includes("69")){
            message.channel.send('Nice');
        }

    }
};