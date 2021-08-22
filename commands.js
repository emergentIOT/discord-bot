const fetch = require('node-fetch');
const hellobot = require('./commands/hellobot.js');
const gif = require('./commands/gif');
  
//const commands = {
//     hellobot: function (args){
//         console.log("hello bot");
//     },
//     gif: function (args){
//         console.log("gif");
//     }
// }
// *****Below line is the shortest method .

const commands = { hellobot, gif };
/**
 * When message is send: EVENT HANDLER
 * msg.channel.id : to interact with particular channel
 * Test Commands : 
 *              - !hellobot
 *              - !gif <any keyword>
 */
module.exports = async function (msg) {
    if(msg.channel.id == "878467183460646922") {
    console.log(msg.content);
    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    if(command.charAt(0) === '!') {
        command = command.substring(1);
        commands[command](msg, tokens);
    }
}
}

