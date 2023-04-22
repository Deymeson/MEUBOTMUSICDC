module.exports = {
    name: 'clear',
    description: 'limpar todas as músicas na fila',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música tocando no momento ${inter.member}... tente novamente! ❌`, ephemeral: true });

        if (!queue.tracks[0]) return inter.reply({ content: `Nenhuma música na fila depois da atual ${inter.member}... tente novamente! ❌`, ephemeral: true });

        await queue.clear();

        inter.reply(`A fila acaba de ser eliminada 🗑️`);
    },
};