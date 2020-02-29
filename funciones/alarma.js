const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    alarma: function(message){
        const args = message.content.split(/ +/g);

        if(args[1] && args[2] != null){
            var current_date = new Date();
            var alarma_date = new Date();
            
            current_date.setHours(current_date.getHours()-3, current_date.getMinutes());

            var fecha_alarma = args[1];
            var hora_alarma = args[2];
    
            var split_fecha = fecha_alarma.split('/');
            var split_hours = hora_alarma.split(':');
            var dia = split_fecha[0];
            var mes = split_fecha[1]-1;
            var ano = split_fecha[2];
            alarma_date.setFullYear(ano,mes,dia);
            alarma_date.setHours(split_hours[0],split_hours[1]);
            if(current_date < alarma_date){
                var mils_current = current_date.getTime();
                var mils_alarma = alarma_date.getTime();
                var mils_between = mils_alarma - mils_current;
                setTimeout(alarma, mils_between);
                function alarma(){
                    message.reply(' DESPIERTA CTM, HABIAS PROGRAMADO '+args[3]);
                    if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
                        
                        var url = 'https://www.youtube.com/watch?v=nVCUKH1vN1g';
                        connection.playStream(ytdl(url, {filter: "audioonly"}));
            
                        setTimeout(timeout, 18000);
                        function timeout(){
                            connection.disconnect()
                        }
            
                   })
                }

                message.reply(' has programado la alarma: '+args[3]);
            }else{
                message.react('😡');
                message.channel.send("Acaso quieres viajar al pasado? Crees que esta wea es steins;gate? >:C");
                console.log('Hora actual: '+current_date+ 'hora programada: '+alarma_date);
            }
            console.log('Hora actual: '+current_date+ '  hora programada: '+alarma_date);

        }else{
            message.channel.send("Faltaron condiciones, el formato es /alarma <dia/mes/año> <hora:minutos> <nombre de la alarma, solo 1 palabra> en formato de 24 horas");
        }
    },



    test2: function(){
        console.log("esta igual");
    }
};