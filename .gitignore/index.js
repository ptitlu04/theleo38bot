const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [], xp: []}).write()

var prefix = (".")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("NDg4MDI1NTA0NTY2MzQ1NzI4.DnWNZw.wa7HYBMv4zrRaw46SXZiEWVrgkI");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n -.help \n -.bot");
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

    var msgauthor = message.author.id;

    if(message.author.bot)return;

    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user : msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb);
        var userxpdb = Object.values(userxpdb)
        console.log(userxp)
        console.log(`Nombre d'xp: ${userxp[1]}`)

        db.get("xp").find({user:msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();
    if (message.content === prefix + "xp"){
        var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
        var xpfinal = Object.values(xp);
        var xp_embed = new Discord.RichEmbed()
            .setTitle(`Stat des XP de ${message.author.username}`)
            .setColor(`#F4D03F`)
            .setDescription("Affichage des XP")
            .addField("XP:", `${xpfinal[1]} xp`)
            .setFooter("Enjoy :p")
        message.channel.send({embed: xp_embed});



}}}})
