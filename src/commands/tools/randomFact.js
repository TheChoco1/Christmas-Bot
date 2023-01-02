const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const facts = [`chocho is dum - joss`,
               `Wendy's founder Dave Thomas dropped out of high school but picked up his GED in 1993. His GED class voted him Most Likely to Succeed.`,
               `"Yeah, I know it's a magic train. Actually, it's a Baldwin 2-8-4 S3-class Berkshire type steam locomotive built in 1931 at the Baldwin Locomotive Works. It weighs 456,100 pounds and has a tractive force of 3,450 pounds." - Know It All`,
               `A black cat crossing your path (from right to left) is considered good luck in Germany.`,
               `1 out of every 200 men is a direct descendant of Genghis Khan.`,
               `The Dingo Fence in Australia is longer than the distance between New York City to London.`,
               `It took Erno Rubik, the creator of the Rubik’s Cube, about one month to solve the cube after he created it.`,
               `Drinking too much water can be fatal.`,
               `The eighth power of a number is a zenzizenzizenzic.`,
               `Australia once lost a war to emus (the birds).`,
               `Red, green, yellow, and orange bell peppers are all the same type of pepper with their color difference being caused by being at different stages of ripeness.`,
               `Tommy Fitzpatrick stole a small plane in 1956 from New Jersey on a bet and then landed it on the narrow street in front of the bar where he had been drinking in Manhattan. Two years later, he did it again after someone didn't believe he had done it the first time.`,
               `joss more dum den chocho - Choco`,
               `"You know, Montezuma, the king of the Aztecs would drink 50 quarts of hot chocolate every day. It was thick as mud and red. He put chili pepper in instead of sugar. Get it? Hot chocolate?" - Know It All`,
               `"Yeah it's a violation of railroad safety regulations for a kid to cross moving cars without a grown-up." - Know It All`,
            ];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('random-facts')
        .setDescription('Returns a random fact.'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });
        const embed = new EmbedBuilder()
            .setTitle(`Random fact: `)
            .setDescription(facts[Math.floor(Math.random() * facts.length)])
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

            await interaction.editReply({
                embeds: [embed],
            });
            message.react('<:AAtPEKnowItAll:1056404461418991676>');
    },
};