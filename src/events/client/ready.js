const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Ready! ${client.user.tag} is logged in and online.`);
        client.user.setPresence({ activities: [{ name: 'The Polar Express.', type: ActivityType.Watching }], status: 'dnd',
	});
    },
};