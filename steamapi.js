function getGames(steamKey){
    var daryl = '76561198021608065';
    var games = request.get('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=F987C03CC424ECB0FD537F650B75A52B&steamid=76561198021608065&format=xml&include_appinfo=true');
    console.log(games);
}