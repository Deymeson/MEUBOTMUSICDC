module.exports = {
    name: 'skip',
    description: 'parar a música',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

         if (!queue || !queue.playing) return inter.reply({ content:`Nenhuma música tocando no momento ${inter.member}... tente novamente! ❌`, ephemeral: true });

        const success = queue.skip();

        return inter.reply({ content: success ? `Música atual ${queue.current.title} pulada ✅` : `algo deu errado ${inter.member}... tente novamente! ❌`});
    },
};