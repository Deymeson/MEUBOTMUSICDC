const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    name: 'controller',
    description: "definir canal do controlador ",
    voiceChannel: false,
    permissions: PermissionsBitField.Flags.ManageMessages,
    options: [
        {
            name: 'channel',
            description: 'o canal para o qual você deseja enviar',
            type: ApplicationCommandOptionType.Channel,
            required: true,
        }
    ],
    async execute({ inter, client }) { 
      let Channel = inter.options.getChannel('channel');
      if (Channel.type !== 0) return inter.reply({ content: `você tem que enviá-lo para um canal de texto.. ❌`, ephemeral: true})

    
      const embed = new EmbedBuilder()
       .setTitle('controle sua música a partir dos botões abaixo')
       .setImage(inter.guild.iconURL({ size: 4096, dynamic: true }))
       .setColor('#36393e')
       .setFooter({ text: 'A música vem primeiro - Feito por Maximus', iconURL: inter.member.avatarURL({ dynamic: true })})


         inter.reply({ content: `enviando controlador para ${Channel}... ✅`, ephemeral: true})

         const back = new ButtonBuilder()
         .setLabel('Voltar')
         .setCustomId(JSON.stringify({ffb: 'back'}))
         .setStyle('Primary')

         const skip = new ButtonBuilder()
         .setLabel('Skip')
         .setCustomId(JSON.stringify({ffb: 'skip'}))
         .setStyle('Primary')

         const resumepause = new ButtonBuilder()
         .setLabel('Continuar & Pausar')
         .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
         .setStyle('Danger')

         const save = new ButtonBuilder()
         .setLabel('Salvar')
         .setCustomId(JSON.stringify({ffb: 'savetrack'}))
         .setStyle('Success')

         const volumeup = new ButtonBuilder()
         .setLabel('Volume up')
         .setCustomId(JSON.stringify({ffb: 'volumeup'}))
         .setStyle('Primary')

         const volumedown = new ButtonBuilder()
         .setLabel('Volume Down')
         .setCustomId(JSON.stringify({ffb: 'volumedown'}))
         .setStyle('Primary')

         const loop = new ButtonBuilder()
         .setLabel('Loop')
         .setCustomId(JSON.stringify({ffb: 'loop'}))
         .setStyle('Danger')

         const np = new ButtonBuilder()
         .setLabel('Tocando agora')
         .setCustomId(JSON.stringify({ffb: 'nowplaying'}))
         .setStyle('Secondary')
         
         const queuebutton = new ButtonBuilder()
         .setLabel('Fila')
         .setCustomId(JSON.stringify({ffb: 'queue'}))
         .setStyle('Secondary')


         const row1 = new ActionRowBuilder().addComponents(back, queuebutton, resumepause, np, skip)
         const row2 = new ActionRowBuilder().addComponents(volumedown, loop, save, volumeup)



        Channel.send({ embeds: [embed], components: [row1, row2] })

    },
}
