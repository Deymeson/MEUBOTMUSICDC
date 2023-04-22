const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'queue',
    description: 'Pegue as músicas na fila',
    voiceChannel: true,

    execute({ client, inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Nenhuma música tocando no momento ${inter.member}... tente novamente! ❌`, ephemeral: true });

        if (!queue.tracks[0]) return  inter.reply({ content: `Nenhuma música na fila depois da atual ${inter.member}... tente novamente! ❌`, ephemeral: true });

        const methods = ['', '🔁', '🔂'];

        const songs = queue.tracks.length;

        const nextSongs = songs > 5 ? ` **${songs - 5}** outra(s) música(s)...` : `Na playlist **${songs}** som(s)...`;

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (solicitado por : ${track.requestedBy.username})`)

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setThumbnail(inter.guild.iconURL({ size: 2048, dynamic: true }))
        .setAuthor({name: `Fila do servidor - ${inter.guild.name} ${methods[queue.repeatMode]}`, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
        .setDescription(`Atual ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`)
        .setTimestamp()
        .setFooter({ text: 'A música vem primeiro - Feito por Maximus', iconURL: inter.member.avatarURL({ dynamic: true })})

        inter.reply({ embeds: [embed] });
    },
};