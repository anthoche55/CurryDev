const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Tu n\'as pas la permission");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Je ne peux pas trouver l'utilisateur");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Spécifie un rôle");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Je ne peux pas trouver ce rôle");

  if(!rMember.roles.has(gRole.id)) return message.reply("L\'utilisateur n\'as pas ce rôle");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`Le rôle ${gRole.name} vous a été enlevé`)
  }catch(e){
    message.channel.send(`L\'utilisateur <@${rMember.id}> a été enlevé du rôle ${gRole.name}`)
  }
}

module.exports.help = {
  name: "removerole"
}
