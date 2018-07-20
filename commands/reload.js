const Discord = require("discord.js");

module.exports.run = async (bot, message) => {	
  if(message.author.id !== "252873409401323520") return message.reply("Tu n\'es pas l\'owner, tu ne peux pas reload le bot !");
                message.react(`✅`)
                    .then(message => client.destroy())
                    .then(() => client.login(process.env.BOT_TOKEN));
}

module.exports.help = {
  name:"reload"
}
