module.exports = {
    reculiao: function(message){
        message.channel.send('*CRITICAL HIT*');
        message.channel.send('Felicitaciones lenin culiao, te has encontrado con un lenin REculiao');
        message.channel.send("", {files: ["i.imgur.com/anJT4a1.png"]});
        message.members.setMute(true, 'Muteo de premio, enjoy');
        
        
    },
    culiao: function(message){
        message.channel.send('Lenin Culiao');
    },
    AmongUs: function(message){

        message.channel.send("", {files: ["https://i.imgur.com/NG8voV4.png"]});

    }
};