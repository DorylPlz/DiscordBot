module.exports = {
    roll1: function(){
        message.react('😢'); 
        message.react('🇫');
        message.channel.send('Uhhh, F');
    },
    memealert: function(){
        message.react('😩'); 
        message.react('👌');
        message.react('💯');
        message.react('🔥');
        message.channel.send('Alerta de meme *Sonido de nuke de cod*');

        //if(!message.member.voiceChannel){
        //    return;
        //}
        //if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
        //    var url = 'https://www.youtube.com/watch?v=u9o0DkInNls';
        //    connection.playStream(ytdl(url, {filter: "audioonly"}));

        //    setTimeout(timeout, 18000);
        //    function timeout(){
        //        connection.disconnect()
        //    }

        //})
    },
    reacts: function(msg, message){
        switch (msg){
            case "uwu": message.channel.send('OwO'); break;
            case "owo": message.channel.send('UwU'); break;
            case "420": 
                var x = Math.floor((Math.random() * 2) + 1);
                switch (x) {
                    case 1:
                        message.channel.send("Lit", {files: ["https://i.imgur.com/KPNDAoN.png"]});
                    break;
                    case 2:
                        message.channel.send("Lit", {files: ["https://i.imgur.com/iLuAMzc.png"]});
                    break;
                }
            break;
            case "presion": message.channel.send('Lo dijo'); break;
            case "presión": message.channel.send('Lo dijo'); break;
            case "precion": message.channel.send('Lo dijo (Mal escrito, pedazo de mierda)'); break;
            case "preción": message.channel.send('Lo dijo (Mal escrito, pedazo de mierda)'); break;
            case "69": message.channel.send('Nice'); break;
        }
    }
};