const Discord = require('discord.js');
const config = require('../config.json');

module.exports = (channel, message) => {
  let logchannel = channel.guild.channels.find('name', 'logs');
  if (!logchannel) return;

  let createdAtRaw = channel.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");

  let embed = new Discord.RichEmbed()
  .setTitle('Un salon a été créé')
  .setColor(config.vert)
  .addField('Nom du salon', `${channel.name}`, true)
  .addField('Type du salon', `${channel.type}`, true)
  .addField('Créé le', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]}`)
  logchannel.send({ embed: embed });

  console.log(`[${channel.guild}] Le salon ${channel.name} a été créé.`);
  return
}
