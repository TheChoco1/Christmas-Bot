const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Returns an embed.'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle(`This is an EMBED!`)
            .setDescription(`This is a very cool description`)
            .setColor("Blue")
            .setImage(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor({
                url: `https://google.com`,
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag,
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag,
            })
            .setURL(`https://discord.com`)
            .addFields([
                {
                    name: `Welcome to the server!`,
                    value: `Please make sure to read all the rules.`,
                    inline: true,
                },
                {
                    name: ``,
                    value: ``,
                    inline: true,
                },
            ]);

            await interaction.reply({
                embeds: [embed],
            });
    },
};