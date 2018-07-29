const Discord = require("discord.js");
const bot = new Discord.Client();
let fonda = [
	"252873409401323520"
];
let admin = [
	"308195368427061248"
];
module.exports = {
	name: 'vcs',
	description: '&vcs',
	execute(message, args) {
let xoargs = message.content.split(" ").slice(1);
            let xo03 = xoargs.join(" ")
 	var xo02 = message.guild.channels.find('name', 'u-chat');
            if(!xo02) return message.reply("Le channel **u-chat** est introuvable")
            if(message.channel.name !== 'u-chat') return message.reply("Commande à effectuer dans **u-chat**")
            if(!xo03) return message.reply("Merci d'écrire un message qui sera envoyé à tous les serveurs où je suis.")
	  var chat = new Discord.RichEmbed()
            .setColor("0x88CC14")
            .setTitle("Message Interne")
	    .setThumbnail(message.author.avatarURL)
            .addField("Utilisateur", message.author.tag, true)
            .addField("Discord", message.guild.name, true)
            .addField("Message", xo03)
            .setFooter("© CurryBeurre | Tous droits réservés.")
            .setTimestamp()
	  var achat = new Discord.RichEmbed()
            .setColor("0xf45c42")
            .setTitle("Message Interne")
	    .setThumbnail(message.author.avatarURL)
            .addField("Administrateur", message.author.tag, true)
            .addField("Discord", message.guild.name, true)
            .addField("Message", xo03)
            .setFooter("© CurryBeurre | Tous droits réservés.")
            .setTimestamp()
	  var fchat = new Discord.RichEmbed()
            .setColor("0xff0000")
            .setTitle("Message Interne")
	    .setThumbnail(message.author.avatarURL)
            .addField("Fondateur", message.author.tag, true)
            .addField("Discord", message.guild.name, true)
            .addField("Message", xo03)
            .setFooter("© CurryBeurre | Tous droits réservés.")
            .setTimestamp()
	  var bannedemb = new Discord.RichEmbed()
            .setColor("0xff0000")
            .setTitle("Tu es banni")
            .addField("Tu es banni", message.author.tag, true)
            .setFooter("© CurryBeurre | Tous droits réservés.")
            .setTimestamp()
	let banned = [
	"000000000000000000"
	];
      if (banned.includes(message.author.id)) {
    	message.guild.channel.find('name', 'u-chat').map(channel => channel.send({ embed: bannedemb }))
      }

      if (fonda.includes(message.author.id)) {
	bot.channels.findAll('name', 'u-chat').map(channel => channel.send({ embed: fchat }))
	}
      if (admin.includes(message.author.id)) {
    	bot.channels.findAll('name', 'u-chat').map(channel => channel.send({ embed: achat }))
        }
	if(message.author.id !== "252873409401323520") {
		if(message.author.id !== "308195368427061248") {
          bot.channels.findAll('name', 'u-chat').map(channel => channel.send({ embed: chat }))
		}	
	}
},
};
