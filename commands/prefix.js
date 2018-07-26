const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
	name: 'prefix',
	description: '&prefix',
	execute(message, args) {

  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Non, tu n\'es pas autorisé à faire cette commande !!!");
  if(!args[0] || args[0 == "help"]) return message.reply("Utilisation: !prefix <préfix>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix mis !")
  .setDescription(`Prefix: ${args[0]}`);

  message.channel.send(sEmbed);


	},
};
