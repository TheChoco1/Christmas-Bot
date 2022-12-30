// const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
// const facts = ['Fish', 'Bob the Builder', 'Dinnertime', 'When it...'];
// const random = Math.floor(Math.random() * 3);

// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName('random-facts')
//         .setDescription('Send a completely random and goofy fact.'),
//     async execute(client, interaction) {
//         const embed = new EmbedBuilder()
//             .setTitle(`${random} fact!`)
//             .setDescription(`${facts[random]}`)
//             .setAuthor({
//                 iconURL: interaction.user.displayAvatarURL(),
//                 name: interaction.user.tag,
//             })
//             .setFooter({
//                 iconURL: client.user.displayAvatarURL(),
//                 text: client.user.tag,
//             })
//             .setTimestamp(Date.now);

//         await interaction.reply({
//             embeds: [embed],
//         });
//     },
// };

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const facts = ['chocho is dum', 'Bob the Builder', 'Dinnertime', `Yeah, I know it's a magic train. Actually, it's a Baldwin 2-8-4 S3-class Berkshire type steam locomotive built in 1931 at the Baldwin Locomotive Works. It weighs 456,100 pounds and has a tractive force of 3,450 pounds.`];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('random-fatcs')
        .setDescription('Returns a random fact.'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle(`Random fact: `)
            .setDescription(facts[Math.floor(Math.random() * 4)])
            .setColor('#000001')
            .setTimestamp(Date.now())
            .setAuthor({
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag,
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag,
            });

            await interaction.reply({
                embeds: [embed],
            });
    },
};