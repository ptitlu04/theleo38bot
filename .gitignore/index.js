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
        message.channel.sendMessage("Liste des commandes : \n -*help \n -*bot");
    }

    if (message.content === prefix + "bot"){
        message.channel("Création du bot le _08/09/2018_ à _19h04_");
        console.log("Commande effectué");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === prefix + "embed"){
        var embed = new Discord.RichEmbed()
            .setTitle("EMBED")
            .setDescription("Ceci est un embed")
            .addField(".help","Page d'aide", true)
            .addField("Embed01", "Embed 01 ! :) Contactez ptitlu04#4274 si vous souhaitez un Bot Discord", true)
            .setColor("0x2E64FE")
            .setFooter("Bon moment parmis nous ! :)")
        message.channel.sendEmbed(embed);
    }

});


