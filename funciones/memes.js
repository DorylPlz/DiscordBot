const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    list: function(message){
        var msg = message.content.toLowerCase();
        switch (msg){
            case "/comunista": 
                var x = Math.floor((Math.random() * 2) + 1);
                switch (x) {
                    case 1:
                        message.channel.send("Comunista culiao", {files: ["https://i.imgur.com/TN5Zo3a.png"]});
                    break;
                    case 2:
                        message.channel.send("", {files: ["https://i.imgur.com/6hJJZ3s.jpg"]});
                    break;
                }
            break;
            case "/paty":
                message.channel.send("paty nazi paty nazi", {files: ["https://i.imgur.com/coiFuaH.png"]});
            break;
            case "/darpel":
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
            break;
            case "/mosh":
                var x = Math.floor((Math.random() * 2) + 1);
                switch (x) {
                    case 1:
                        message.channel.send("darilo mosh darilo mosh", {files: ["https://i.imgur.com/3iwQ72T.jpg"]});
                    break;
                    case 2:
                        message.channel.send("", {files: ["https://i.imgur.com/7EaGfBp.jpg"]});
                    break;
                }
            break;
            case "/clucho":
                var x = Math.floor((Math.random() * 2) + 1);
                switch (x) {
                    case 1:
                        message.channel.send("ermanito teni falopa? me funaron ermanito", {files: ["https://i.imgur.com/grGXM4O.jpg"]});
                    break;
                    case 2:
                        message.channel.send("", {files: ["https://i.imgur.com/JDSgGa1.jpg"]});
                    break;
                }
            break;
            case "/hernan":
                var x = Math.floor((Math.random() * 2) + 1);
                switch (x) {
                    case 1:
                        message.channel.send("Gotta go fast", {files: ["https://i.imgur.com/aTC5xzZ.jpg"]});
                    break;
                    case 2:
                        message.channel.send("", {files: ["https://i.imgur.com/Et3IFPI.jpg"]});
                    break;
                }
            break;
            case "tomas":
                var x = Math.floor((Math.random() * 3) + 1);
                switch (x) {
                    case 1:
                        message.channel.send("Culiao", {files: ["https://i.imgur.com/sTV9tWc.png"]});
                    break;
                    case 2:
                        message.channel.send("Culiao", {files: ["https://i.imgur.com/GAObyrc.png"]});
                    break;
                    case 3:
                        message.channel.send("Culiao", {files: ["https://i.imgur.com/Ste8O5V.png"]});
                    break;
                }
            break;
            case "tomás":
                var x = Math.floor((Math.random() * 3) + 1);
                switch (x) {
                    case 1:
                        message.channel.send("Culiao", {files: ["https://i.imgur.com/sTV9tWc.png"]});
                    break;
                    case 2:
                        message.channel.send("Culiao", {files: ["https://i.imgur.com/GAObyrc.png"]});
                    break;
                    case 3:
                        message.channel.send("Culiao", {files: ["https://i.imgur.com/Ste8O5V.png"]});
                    break;
                }
            break;
        }
    }
};