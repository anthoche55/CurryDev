const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let user = message.mentions.users.first();
        let image = user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`)
            .setColor("RANDOM")
            .setImage(image)
        message.channel.send({ embed: embed });
}

module.exports.help = {
  name:"avatar"
}