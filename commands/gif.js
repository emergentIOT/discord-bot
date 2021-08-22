const fetch = require('node-fetch');

module.exports = async function(msg, args) {
        
        let keywords = 'excited';
        if(args.length > 0) {
            //keywords = tokens.slice(1, tokens.length).join(" ");
            keywords = args.join(" ");
        }
        let GIF_URL = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}`
        let response = await fetch(GIF_URL);
        let json = await response.json();
        let index = Math.floor(Math.random() * json.results.length);
        //Get gif url, from the received reults.
        msg.channel.send(json.results[index].url)

    }