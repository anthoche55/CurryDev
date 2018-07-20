const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args, prefix) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu n\'as pas la permission");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Je ne peux pas trouver l'utilisateur");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("L\'utilisateur est un membre du staff, tu ne peux pas le warn...");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Utilisateur warn", `<@${wUser.id}>`)
  .addField("Warn dans", message.channel)
  .addField("Nombre de warns", warns[wUser.id].warns)
  .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "logs");
  if(!warnchannel) return message.reply("Je ne peux pas trouver le salon #logs");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muté");
    if(!muterole) return message.reply("Tu dois créer le rôle muté");

    let mutetime = "10s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> a été mute temporairement`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> a été mute.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 3){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> a été ban.`)
  }

}

module.exports.help = {
  name: "warn"
}
