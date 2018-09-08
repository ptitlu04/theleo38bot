const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("NDg4MDI1NTA0NTY2MzQ1NzI4.DnWNZw.wa7HYBMv4zrRaw46SXZiEWVrgkI");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n -*help");
    }

    if (message.content === prefix + "tt"){
        message.channel("Création du bot le _08/09/2018_ à _19h04_");
        console.log("Commande effectué");
    }

    if (message;content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
});
