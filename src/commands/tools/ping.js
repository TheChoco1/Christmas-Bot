const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pong! With ping!'),
    async execute(interaction) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });

        const newMessage = `Bot ping: ${message.createdTimeStamp - interaction.createdTimeStamp}`;
        await interaction.editReply({
            content: newMessage,
        });

    },
};