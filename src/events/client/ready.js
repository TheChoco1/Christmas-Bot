const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Ready! ${client.user.tag} is logged in and online.`);
        client.user.setPresence({ activities: [{ type: ActivityType.Watching, name: 'The Polar Express.' }], status: 'dnd' });
    },
};