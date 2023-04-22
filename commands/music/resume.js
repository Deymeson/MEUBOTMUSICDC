module.exports = {
    name: 'resume',
    description: 'continuar a música',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Nenhuma música tocando no momento ${inter.member}... tente novamente! ❌`, ephemeral: true });
        

        if(!queue.connection.paused) return inter.reply({content: `A pista já está rodando, ${inter.member}... tente novamente! ❌`, ephemeral: true})

        const success = queue.setPaused(false);
        
        return inter.reply({ content:success ? `Música atual ${queue.current.title} continuada ✅` : `algo deu errado ${inter.member}... tente novamente! ❌`});
    },
};
