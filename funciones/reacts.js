module.exports = {

    memealert: function(message){
        message.react('😩'); 
        message.react('👌');
        message.react('💯');
        message.react('🔥');
    },
    reacts: function(msg, message){

        if(msg.includes("juego")){
            message.channel.send('perdí');
        }
        if(msg.includes("69")){
            message.react('🤔');
        }

    }
};