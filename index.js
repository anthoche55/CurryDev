const fs = require('fs');
const Discord = require('discord.js');
const prefix = "&"

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.on("ready", async () => {
  console.log(`${bot.user.username} est en ligne sur ${bot.guilds.size} serveurs!`);
});

bot.login(process.env.BOT_TOKEN);
