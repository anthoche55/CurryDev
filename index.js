const fs = require('fs');
const Discord = require('discord.js');
const prefix = "&"

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

bot.on("ready", async () => {
  console.log(`${bot.user.username} est en ligne sur ${bot.guilds.size} serveurs!`);
  console.log(area(1))
  console.log(perimeter(0.5))
});

bot.login(process.env.BOT_TOKEN);
