const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//To use the .env variables
require('dotenv').config();
const fetch = require('node-fetch');

//Connect to client
client.login(process.env.BOT_TOKEN);

//Some random replies.
const replies = [
    'I am doing good', 
    'heyyyy wassp', 
    'hows your day been'
]

client.on('ready', clientIsReady);
client.on('message', gotMessage);

//When bot is ready
function clientIsReady() {
    console.log("Bot is ready to work :)");
}

/**
 * When message is send: EVENT HANDLER
 * msg.channel.id : to interact with particular channel
 */
async function gotMessage(msg) {
    console.log(msg.content);
    if(msg.channel.id == '878467183460646922'){
        let tokens = msg.content.split(" ");
        if(tokens[0] === 'how are you?') {
        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
    } else if(tokens[0] == '!gif') {
        let keywords = 'excited';
        if(tokens.length > 1) {
            keywords = tokens.slice(1, tokens.length).join(" ");
        }
        let GIF_URL = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}`
        let response = await fetch(GIF_URL);
        let json = await response.json();
        let index = Math.floor(Math.random() * json.results.length);
        //Get gif url, from the received reults.
        msg.channel.send(json.results[index].url)
    }
}

}