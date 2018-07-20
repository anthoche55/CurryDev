const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Je ne peux pas trouver cette personne");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n\'as pas la permission");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je ne peux pas kick cette personne");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Utilisateur kick", `${kUser} comme ID ${kUser.id}`)
    .addField("Kick par", `<@${message.author.id}> comme ID ${message.author.id}`)
    .addField("Kick dans", message.channel)
    .addField("Temps", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "logs"); 
    if(!kickChannel) return message.channel.send("Je ne peux pas trouver le salon #logs");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
