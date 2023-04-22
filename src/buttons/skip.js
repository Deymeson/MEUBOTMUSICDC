module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Nenhuma música tocando no momento... tente novamente! ❌`, ephemeral: true });
    
    const success = queue.skip();

    return inter.reply({ content: success ? `Música atual ${queue.current.title} pulada ✅` : `algo deu errado ${inter.member}... tente novamente! ❌`, ephemeral: true});
}