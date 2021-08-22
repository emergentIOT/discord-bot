const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require('dotenv').config();
const commandHandler = require('./commands');

//Connect to client
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log("Bot is ready to work :)");
})

/**
 * Handling multiple calls.
 */
client.on('message', commandHandler);
