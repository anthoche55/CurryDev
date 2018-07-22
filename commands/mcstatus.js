const Discord = require('discord.js');
const superagent = require('superagent');
const errors = require('../util/errors.js');

module.exports.run = async (client, message, args) => {
  let mcIP = args[0];
  if (!mcIP) return errors.invalidIP(message);

  let {body} = await superagent
  .get('http://mcapi.us/server/status?ip=' + mcIP);
  let status = body.online ? "✅" : "❎";

  let embed = new Discord.RichEmbed()
  .setTitle(`Information sur ${mcIP}`)
  .setThumbnail('https://vignette.wikia.nocookie.net/minecraftpocketedition/images/f/f1/Minecraft_1.2_Logo.png/revision/latest?cb=20171204231225')
  .setColor(0x71f442)
  .addField('Serveur en ligne', status)
  .addField('Joueurs connectés', body.players.now, true)
  .addField('Max de joueurs', body.players.max, true);
  message.channel.send({ embed: embed });

  console.log(`[${message.guild}] ${message.author.username} demande le status du serveur : ${mcIP}`);
  return
};

module.exports.help = {
  name: 'mcstatus'
};
