const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('rule-embed')
        .setDescription('Returns the rules embed.'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle(`All Aboard The Polar Express!`)
            .setDescription(`We are on a VERY tight schedule, so please take your seats! Please read the following:`)
            .setColor("#4169e1")
            .setTimestamp(Date.now())
            .setImage('https://media.discordapp.net/attachments/1055602359532785674/1056314792765300746/schedule.png?width=1402&height=701')
            .setAuthor({
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag,
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag,
            })
            .addFields([
                {
                    name: `1. Follow Discord ToS!`,
                    value: `https://discord.com/terms`,
                    inline: true,
                },
                {
                    name: `2. No Spamming.`,
                    value: `No repeating messages, large walls of text, or anything of the sort.`,
                    inline: true,
                },
                {
                    name: `3. No DM advertising.`,
                    value: `This is very annoying to all members.`,
                    inline: true,
                },
                {
                    name: `4. `,
                    value: `Blank`,
                    inline: false,
                },
            ]);

            await interaction.reply({
                embeds: [embed],
            });
    },
};