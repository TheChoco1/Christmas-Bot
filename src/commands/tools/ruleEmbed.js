const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rule-embed')
        .setDescription('Returns the rules embed.'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });
        const embed = new EmbedBuilder()
            .setTitle(`All Aboard The Polar Express!`)
            .setDescription(`We are on a VERY tight schedule, so please take your seats! Please read the following:`)
            .setColor(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255))
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
                    name: `4. Do not create unnecessary drama.`,
                    value: `This can be religious, political, or anything of the sort.`,
                    inline: true,
                },
                {
                    name: `5. NSFW is not allowed.`,
                    value: `This is a family friendly server.`,
                    inline: true,
                },
                {
                    name: `6. Use common sense`,
                    value: `Just because something isn't listed here doesn't give you right to do something dumb.`,
                    inline: true,
                },
                {
                    name: `7. Never, never ever ever EVER pull the Emergancy Break!`,
                    value: `This stops the train and we will not be on schedule anymore.`,
                    inline: false,
                },
            ]);

            await interaction.editReply({
                embeds: [embed],
            });
            message.react('📜');
    },
};