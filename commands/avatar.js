const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
	name: 'avatar',
	description: '&avatar',
	execute(message, args) {
                
	if(!args) return message.reply("Mentionne une personne pour voir son avatar")
        let user = message.mentions.users.first();
        let image = user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`)
            .setColor("RANDOM")
            .setImage(image)
        message.channel.send({ embed: embed });
},
};
