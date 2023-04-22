const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');

player.on('error', (queue, error) => {
    console.log(`Erro emitido da fila ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Erro emitido da conexão ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    const embed = new EmbedBuilder()
    .setAuthor({name: `começou a tocar ${track.title} em ${queue.connection.channel.name} 🎧`, iconURL: track.requestedBy.avatarURL()})
    .setColor('#13f857')

    const back = new ButtonBuilder()
    .setLabel('Voltar')
    .setCustomId(JSON.stringify({ffb: 'back'}))
    .setStyle('Primary')

    const skip = new ButtonBuilder()
    .setLabel('Skip')
    .setCustomId(JSON.stringify({ffb: 'skip'}))
    .setStyle('Primary')

    const resumepause = new ButtonBuilder()
    .setLabel('Retomar e pausar')
    .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
    .setStyle('Danger')

    const loop = new ButtonBuilder()
    .setLabel('Loop')
    .setCustomId(JSON.stringify({ffb: 'loop'}))
    .setStyle('Secondary')
    
    const queuebutton = new ButtonBuilder()
    .setLabel('Fila')
    .setCustomId(JSON.stringify({ffb: 'queue'}))
    .setStyle('Secondary')

    const row1 = new ActionRowBuilder().addComponents(back, loop, resumepause, queuebutton, skip)
    queue.metadata.send({ embeds: [embed], components: [row1] })
});

player.on('trackAdd', (queue, track) => {
   
    queue.metadata.send(`Música ${track.title} adicionado na fila ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Fui desconectado manualmente do canal de voz, limpando a fila... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Ninguém está no canal de voz, saindo do canal de voz... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Terminei de Reproduzir a fila inteira ✅');
});

player.on('tracksAdd', (queue, tracks) => {
    queue.metadata.send(`Todas as músicas na lista de reprodução adicionadas à fila ✅`);
});