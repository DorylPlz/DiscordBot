module.exports = {
    reculiao: function(message){
        message.channel.send('*CRITICAL HIT*');
        message.channel.send('Felicitaciones lenin culiao, te has encontrado con un lenin REculiao');
        message.channel.send("", {files: ["https://i.imgur.com/anJT4a1.png"]});
        message.members.setMute(true, 'Muteo de premio, enjoy');    
    },
    culiao: function(message){
        var x = Math.floor((Math.random() * 100) );
        if(x <= 30){
            message.channel.send('Lenin Culiao');
        }else if(x > 30 && x <= 60){
            message.channel.send('Chupalo ctm');
        }else if(x > 60 && x <= 90){
            message.channel.send('Nisiistiiinfirmi');
        }else if(x > 00 && x <= 100){
            message.channel.send('Andate con tus amiguitas de la u nomas :)');
        }
    },
    AmongUs: function(message){
        message.channel.send("", {files: ["https://i.imgur.com/NG8voV4.png"]});
    }
};