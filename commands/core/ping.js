const ms = require('ms');

module.exports = {
    name: 'ping',
    description: "Obter o ping do bot!",
    async execute({ client, inter }) {

        const m = await inter.reply("Ping?")
        inter.editReply(`Pong! Latência da API é ${Math.round(client.ws.ping)}ms 🛰️,esse foi o valor calculado ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} ago`)

    },
};
