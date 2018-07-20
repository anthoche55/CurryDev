const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Je ne peux pas trouver l\'utilisateur");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Utilisateur report", `Pseudo: ${rUser}\nID: ${rUser.id}`)
    .addField("Report par", `Pseudo: ${message.author}\nID: ${message.author.id}`)
    .addField("Salon", message.channel)
    .addField("Temps", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "logs");
    if(!reportschannel) return message.channel.send("Je ne peux pas trouver le salon #logs");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}
