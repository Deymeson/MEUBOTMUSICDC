const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'remove',
    description: "remover uma música da fila",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'o nome/url da faixa que você deseja remover',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'number',
            description: 'o lugar na fila em que a música está',
            type: ApplicationCommandOptionType.Number,
            required: false,
        }
    ],

    async execute({ inter }) { 
        const number =  inter.options.getNumber('number')
        const track = inter.options.getString('song');

        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música tocando no momento ${inter.member}... tente novamente! ❌`, ephemeral: true });
        if (!track && !number) inter.reply({ content: `Você tem que usar uma das opções para remover uma música ${inter.member}... tente novamente! ❌`, ephemeral: true });

        if (track) {

        for (let song of queue.tracks) {
            if (song.title === track || song.url === track ) {
                queue.remove(song)
                return inter.reply({ content: `removido ${track} da fila ✅` });
            }

        }

        return inter.reply({ content: `não consegui encontrar ${track} ${inter.member}... tente usar a url ou o nome completo da musica! ❌`, ephemeral: true });    
        }

        if (number) {

            const index = number - 1
            const trackname = queue.tracks[index].title

            if (!trackname) return inter.reply({ content: `Esta dose de faixa parece não existir ${inter.member}...  tente novamente!❌`, ephemeral: true });   

            queue.remove(index);
            
            return inter.reply({ content: `removido ${trackname} da fila ✅` });
        }


         
    }
}