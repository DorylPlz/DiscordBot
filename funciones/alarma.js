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
    var current_date = new Date();
    current_date.setHours(current_date.getHours()-3, current_date.getMinutes());
    var current_sql = current_date.getFullYear()+"-"+current_date.getMonth()+"-"+current_date.getDate()+" "+current_date.getHours()+":"+current_date.getMinutes()+":00";
    
    let alarmas = "SELECT * FROM alarmas WHERE estado = 1 && fecha_alarma > '"+current_sql+"';";

    db.query(alarmas, (err, results) => {
        if(err) throw err;
        if(results.length >= 1){
            console.log("Si hay alarmas activas");
            for(let i=0, len=results.length; i<len; i++){
                alarma.id_alarma = results[i].id_alarma;
                alarma.nombre = results[i].nombre;
                alarma.fecha_ingreso = results[i].fecha_ingreso;
                alarma.fecha_alarma = results[i].fecha_alarma;
                alarma.id_usu = results[i].id_usu;
                alarma.estado = results[i].estado;



                var alarma_date = new Date();
                args = ['','',alarma.nombre];
                current_sql = alarma.fecha_ingreso;
                var alarma_sql = alarma.alarma_date;

                const arg = alarma['fecha_alarma'].split(/ +/g);
                var fecha_alarma = arg[1];
                var hora_alarma = arg[2];
        
                var split_fecha = fecha_alarma.split('/');
                var split_hours = hora_alarma.split(':');
                var dia = split_fecha[0];
                var mes = split_fecha[1]-1;
                var ano = split_fecha[2];
                alarma_date.setFullYear(ano,mes,dia);
                alarma_date.setHours(split_hours[0],split_hours[1]);

                var mils_current = current_date.getTime();
                var mils_alarma = alarma_date.getTime();
                var mils_between = mils_alarma - mils_current;
                message = null;
                setAlarmas(mils_between, args, alarma_sql, message);
                

                console.log(alarma);
            }
        }else{
            console.log("No hay alarmas activas");
        }

    })


}

function setAlarmas(mils_between, args, alarma_sql, message){
    setTimeout(alarma, mils_between);
    function alarma(){
        message.reply(' DESPIERTA CTM, HABIAS PROGRAMADO '+args[3]);

        let estado = "UPDATE `alarmas` SET `estado` = 0 WHERE `fecha_alarma` = '"+alarma_sql+"';";

        let query2 = db.query(estado, (err, results) => {
            if(err) throw err;
            console.log("Alarma apagada");
            db.end();
        })
        if(message != null){
            if(message.guild.voiceConnection){
                if(message.member.voiceChannel){
                    message.member.voiceChannel.join().then(function(connection){
                
                        var url = 'https://www.youtube.com/watch?v=nVCUKH1vN1g';
                        connection.playStream(ytdl(url, {filter: "audioonly"}));
            
                        setTimeout(timeout, 18000);
                        function timeout(){
                            connection.disconnect()

                        }
            
                })
                }else{
                    console.log("No está conectado el usuario");
                }
            }else{
                console.log("No está conectado el usuario");
            }
        }else{
            console.log("Alarma retomada, no es posible entrar");
        }
                
    }

    message.reply(' has programado la alarma: '+args[3]);
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

                setAlarmas(mils_between, args, alarma_sql, message);

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