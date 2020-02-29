const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    compare: function(steamKey, message){
            var darylid = '76561198021608065';
            var burgosid = '76561198052245687';
            var lista1 = optionsteam(burgosid);
            console.log(lista1);

            function optionsteam(id){
                var lista = [];
                var options = {
                    host: 'api.steampowered.com',
                    port: 80,
                    path: '/IPlayerService/GetOwnedGames/v0001/?key='+steamKey+'&steamid='+darylid+'&format=json&include_appinfo=true',
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
};