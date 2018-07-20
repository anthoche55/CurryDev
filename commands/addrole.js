const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Désolé, tu n\'as pas la permission d'éxecuter cette commande.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Je ne sais pas trouver cette personne.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Spécifie un rôle.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Je ne sais pas trouver ce rôle.");

  if(rMember.roles.has(gRole.id)) return message.reply("Ce joueur a déjà ce rôle.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Félicitation, tu as reçu le rôle : \"${gRole.name}."`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`<@${rMember.id}> a reçu le rôle ${gRole.name}. J\'ai essayé de lui envoyer un mp mais il les a bloqué.`)
  }
}

module.exports.help = {
  name: "addrole"
}
