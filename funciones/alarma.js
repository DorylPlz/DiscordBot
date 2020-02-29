const ytdl = require('ytdl-core');
const config = require("../config.json");
const mysql = require("mysql");

const db = 
    mysql.createConnection({
        host: process.env.host,//config.db.host, 
        user: process.env.user,//config.db.user,
        password: process.env.password,//config.db.password,
        database: process.env.database//config.db.database
    });

var alarma = {
    id_alarma: '',
    nombre: '',
    fecha_ingreso: '',
    fecha_alarma: '',
    id_usu: '',
    estado: ''
};

function checkAlarmas(){
    let alarmas = "SELECT * FROM alarmas WHERE estado = 1";

    let query = db.query(alarmas, (err, results) => {
        if(err) throw err;
        for(let i=0, len=results.length; i<len; i++){
            if(result[i].estado == 1){
                console.log("si hay alarmas activas");
            }
        }
    })


}


module.exports = {
    checkAlarmas,
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
                console.log("Milisegundos: "+mils_between);
                var current_sql = current_date.getFullYear()+"-"+current_date.getMonth()+"-"+current_date.getDate()+" "+current_date.getHours()+":"+current_date.getMinutes()+":00";
                var alarma_sql = ano+"-"+split_fecha[1]+"-"+dia+" "+split_hours[0]+":"+split_hours[1]+":00";

                let savealarma = "INSERT INTO `alarmas`(`nombre`,`fecha_ingreso`,`fecha_alarma`,`id_usu`,`estado`)VALUES('"+args[3]+"','"+current_sql+"','"+alarma_sql+"',1,1);";
    
                let query = db.query(savealarma, (err, results) => {
                    if(err) throw err;
                    console.log("Registrada en la base de datos");
                })

                setTimeout(alarma, mils_between);
                function alarma(){
                    message.reply(' DESPIERTA CTM, HABIAS PROGRAMADO '+args[3]);

                    let estado = "UPDATE `alarmas` SET `estado` = 0 WHERE `fecha_alarma` = '"+alarma_sql+"';";
    
                    let query2 = db.query(estado, (err, results) => {
                        if(err) throw err;
                        console.log("Alarma apagada");
                    })

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
    }
};