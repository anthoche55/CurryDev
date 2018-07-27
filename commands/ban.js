module.exports = {
	name: 'ban',
	description: '&ban',
	execute(message) {
        
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Je ne sais pas trouver cette personne");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Tu n\'as pas la permission");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je ne peux pas ban cette personne");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Utilisateur ban", `${bUser} comme ID ${bUser.id}`)
    .addField("Banni par", `<@${message.author.id}> comme ID ${message.author.id}`)
    .addField("Banni dans", message.channel)
    .addField("Temps", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "logs");
    if(!incidentchannel) return message.channel.send("Tu dois créer le salon #logs.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
       },
};
