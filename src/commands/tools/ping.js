const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pong! With ping!'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });
        console.log(message);
        const newMessage = `🏓 Pong! ${client.ws.ping}`;
        await interaction.editReply({
            content: newMessage,
        });
    },
};