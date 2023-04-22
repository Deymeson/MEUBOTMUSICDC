module.exports = {
    name: 'pause',
    description: 'pausar a faixa',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Nenhuma música tocando no momento ${inter.member}... tente novamente! ❌`, ephemeral: true });
        
        if(queue.connection.paused) return inter.reply({content: 'A faixa está pausada no momento!', ephemeral: true})

        if(queue.connection.paused) return inter.reply({content: `A faixa está pausada no momento, ${inter.member}... tente novamente! ❌`, ephemeral: true})

        const success = queue.setPaused(true);
        
        return inter.reply({ content: success ? `Música atual ${queue.current.title} pausado ✅` : `algo deu errado ${inter.member}... tente novamente! ❌` });
    },
};
