module.exports = {
    name: 'ready',
    async execute(interaction, client) {
        if (interaction.isCommand()) {
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName);
            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({
                    content: `Something went wrong when executing.`,
                    ephemeral: true,
                });
            }
        }
    },
};