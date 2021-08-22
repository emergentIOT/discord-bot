//Some random replies.
const replies = [
    'I am doing good', 
    'heyyyy wassp', 
    'hows your day been'
];

module.exports = function (msg, args) {
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[index])
}
