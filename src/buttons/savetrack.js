const { EmbedBuilder } = require('discord.js')

module.exports = async ({ inter, queue }) => {
    if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música tocando no momento... tente novamente! ❌`, ephemeral: true });

    inter.member.send({
        embeds: [
            new EmbedBuilder()
                .setColor('Red')
                .setTitle(`:arrow_forward: ${queue.current.title}`)
                .setURL(queue.current.url)
                .addFields(
                    { name: ':hourglass: Duração:', value: `\`${queue.current.duration}\``, inline: true },
                    { name: 'Som por:', value: `\`${queue.current.author}\``, inline: true },
                    { name: 'Views :eyes:', value: `\`${Number(queue.current.views).toLocaleString()}\``, inline: true },
                    { name: 'URL:', value: `\`${queue.current.url}\`` }
                )
                .setThumbnail(queue.current.thumbnail)
                .setFooter({ text: `do servidor ${inter.member.guild.name}`, iconURL: inter.member.guild.iconURL({ dynamic: false }) })
        ]
    }).then(() => {
        return inter.reply({ content: `Enviei-te o título da música no pv✅`, ephemeral: true });
    }).catch(error => {
        return inter.reply({ content: `Não foi possível enviar-lhe uma mensagem privada... tente novamente! ❌`, ephemeral: true });
    });


}
