module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música tocando no momento... tente novamente! ❌`, ephemeral: true });

    const success = queue.setPaused(false);
    
    if (!success) queue.setPaused(true);
    

    return inter.reply({ content: `${success ? `Música atual ${queue.current.title} pausado ✅` : `Música atual ${queue.current.title} retomado ✅`}`, ephemeral: true});
}