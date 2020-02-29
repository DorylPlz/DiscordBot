const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const https = require("http");
const config = require("./config.json");

const db = config.db;
const configApp = config.App;


const token = configApp.token;//process.env.TOKEN;
const steamKey = configApp.steam;//process.env.STEAM;
const PREFIX = configApp.prefix;

var servers = {};

bot.on('ready', () =>{
    console.log('Bot online');
})

bot.on('message', message =>{
    
    let args = message.content.substring(PREFIX.lenght).split("");

    var msg = message.content.toLowerCase();

    if (message.author.bot){
        if (message.author.id == "261302296103747584"){
            if (msg.includes("Critical Fail!")){
                message.react('😢'); 
                message.react('🇫');
                message.channel.sendMessage('Uhhh, F');
            }else{
                return;
            }
        }else{
            return;
        }
    };

    if(message.channel.id == "514929154555117608"){

        //if(!message.member.voiceChannel){
        //    return;
        //}
        message.react('😩'); 
        message.react('👌');
        message.react('💯');
        message.react('🔥');
        message.channel.sendMessage('Alerta de meme *Sonido de nuke de cod*');
        //if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
        //    var url = 'https://www.youtube.com/watch?v=u9o0DkInNls';
        //    connection.playStream(ytdl(url, {filter: "audioonly"}));

        //    setTimeout(timeout, 18000);
        //    function timeout(){
        //        connection.disconnect()
        //    }

        //})
    }
//Respuestas
    if (msg.includes("uwu")){
        message.channel.sendMessage('OwO');
    }
    if (msg.includes("owo")){
        message.channel.sendMessage('UwU');
    }
    if (msg.includes("420")){
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
    if (msg.includes("weon")){
        message.channel.sendMessage('Aprende a insultar hueon');
    }



//Easter eggs
    if (msg.includes("presion")){
        message.channel.sendMessage('Lo dijo');
    }
    if (msg.includes("presión")){
        message.channel.sendMessage('Lo dijo');
    }
    if (msg.includes("precion")){
        message.channel.sendMessage('Lo dijo (Mal escrito, pedazo de mierda)');
    }
    if (msg.includes("preción")){
        message.channel.sendMessage('Lo dijo (Mal escrito, pedazo de mierda)');
    }
    if (msg.includes("69")){
        message.channel.sendMessage('Nice');
    }
    if (msg.includes("foto")){
        message.channel.send("Que foto?", {files: ["https://pbs.twimg.com/media/DmcpEsPX4AEzs7X.jpg"]});
    }

//alarma
    if (msg.includes("/alarma")){
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


    }
//Memes
    if (msg.includes("/comunista")){
        
        var x = Math.floor((Math.random() * 2) + 1);
        switch (x) {
            case 1:
                message.channel.send("Comunista culiao", {files: ["https://i.imgur.com/TN5Zo3a.png"]});
            break;
            case 2:
                message.channel.send("", {files: ["https://i.imgur.com/6hJJZ3s.jpg"]});
            break;
        }
    }
    if (msg.includes("/paty")){
        message.channel.send("paty nazi paty nazi", {files: ["https://i.imgur.com/coiFuaH.png"]});
    }
    if (msg.includes("/darpel")){
        var x = Math.floor((Math.random() * 4) + 1);
        switch (x) {
            case 1:
                message.channel.send("Culiao que tenia que mandar el meme menos meme de el, darpel culiao", {files: ["https://i.imgur.com/oMnWjeb.png"]});
            break;
            case 2:
                message.channel.send("", {files: ["https://i.imgur.com/6qg3C9G.jpg"]});
            break;
            case 3:
                message.channel.send("Darpel nazi", {files: ["https://i.imgur.com/rBaj2Os.jpg"]});
            break;
            case 4:
                message.channel.send("Darpel no homo", {files: ["https://i.imgur.com/D5k3cST.jpg"]});
            break;
        }
    }
    if (msg.includes("/mosh")){
        
        var x = Math.floor((Math.random() * 2) + 1);
        switch (x) {
            case 1:
                message.channel.send("darilo mosh darilo mosh", {files: ["https://i.imgur.com/3iwQ72T.jpg"]});
            break;
            case 2:
                message.channel.send("", {files: ["https://i.imgur.com/7EaGfBp.jpg"]});
            break;
        }
    }
    if (msg.includes("/clucho")){
        var x = Math.floor((Math.random() * 2) + 1);
        switch (x) {
            case 1:
                message.channel.send("ermanito teni falopa? me funaron ermanito", {files: ["https://i.imgur.com/grGXM4O.jpg"]});
            break;
            case 2:
                message.channel.send("", {files: ["https://i.imgur.com/JDSgGa1.jpg"]});
            break;
        }
        
    }
    if (msg.includes("/hernan")){
        var x = Math.floor((Math.random() * 2) + 1);
        switch (x) {
            case 1:
                message.channel.send("Gotta go fast", {files: ["https://i.imgur.com/aTC5xzZ.jpg"]});
            break;
            case 2:
                message.channel.send("", {files: ["https://i.imgur.com/Et3IFPI.jpg"]});
            break;
        }
        
    }

    if(message.channel.id == "675043690921852928"){
        if (msg == "."){
            var darylid = '76561198021608065';
            var burgosid = '76561198052245687';
            var lista1 = optionsteam(burgosid);
            console.log(lista1);

            function optionsteam(id){
                var lista = [];
                var options = {
                    host: 'api.steampowered.com',
                    port: 80,
                    path: '/IPlayerService/GetOwnedGames/v0001/?key='+steamKey+'&steamid='+id+'&format=json&include_appinfo=true',
                    method: 'GET'
                }
                
                var games = https.request(options, function(res){
                    var body = '';
        
                    res.on('data', function(chunck){
                        body += chunck;
                    });
                    res.on('end', function(){
                        var res = JSON.parse(body);

                            var response = res['response'];
                            let game = response['games'];
                            //let msj = game['message'];
                            
                            for(let i=0, len=game.length; i<len; i++){
                                lista.push(game[i]['name']);
                            }
                            callback(lista);
                    })
                }).end();
                return lista;
            }
        }
    }
})

bot.login(token);
