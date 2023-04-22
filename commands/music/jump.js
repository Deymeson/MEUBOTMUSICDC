const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'jump',
    description: "Salta para uma faixa específica na fila",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'o nome/url da faixa para a qual você deseja pular',
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
        const track = inter.options.getString('song');
        const number =  inter.options.getNumber('number')

        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música tocando no momento ${inter.member}... tente novamente! ❌`, ephemeral: true });
        if (!track && !number) inter.reply({ content: `Você tem que usar uma das opções para pular para uma música ${inter.member}... tente novamente! ❌`, ephemeral: true });

            if (track) {
        for (let song of queue.tracks) {
            if (song.title === track || song.url === track ) {
                queue.skipTo(song)
                return inter.reply({ content: `pulado para ${track} ✅` });
            }
        }
        return inter.reply({ content: `não consegui encontrar ${track} ${inter.member}... tente usar a url ou o nome completo da musica! ❌`, ephemeral: true });    
    }
    if (number) {
        const index = number - 1
        const trackname = queue.tracks[index].title
        if (!trackname) return inter.reply({ content: `Esta faixa parece não existir ${inter.member}...  tente novamente!❌`, ephemeral: true });   
        queue.skipTo(index);
        return inter.reply({ content: `Pulado para ${trackname}  ✅` });
    }
         
    }
}