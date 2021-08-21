const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//To use the .env variables
require('dotenv').config();

//Connect to client
client.login(process.env.BOT_TOKEN);

//Some random replies.
const replies = [
    'I am doing good', 
    'heyyyy wassp', 
    'hows your day been'
]

//When bot is ready
client.on('ready', () => {
    console.log("Bot is ready to work :)");
})

/**
 * When message is send: EVENT HANDLER
 * msg.channel.id : to interact with particular channel
 */
client.on('message', (msg) => {
    console.log(msg.content);
    if(msg.channel.id == '878467183460646922' && msg.content === 'how are you?') {
        const index = Math.floor(Math.random() * replies.length);
        msg.reply(replies[index]);
    }

})