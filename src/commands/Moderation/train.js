import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder
} from 'discord.js';

const scenarios = [
    "A member keeps spamming messages after you already warned them. What would you do?",
    "Two members start arguing and insulting each other in general chat. What should you do?",
    "A member reports another user for breaking a rule, but you do not have enough information to confirm what happened. What do you do?",
    "A friend of yours breaks a server rule. Should you ignore it because they are your friend?",
    "A member is angry about receiving a punishment and starts arguing with you. How should you respond?"
];

export default {
    data: new SlashCommandBuilder()
        .setName("train")
        .setDescription("Start a staff training scenario")
        .setDefaultMemberPermissions(
            PermissionFlagsBits.ModerateMembers
        ),

    category: "moderation",

    async execute(interaction) {
        const scenario =
            scenarios[Math.floor(Math.random() * scenarios.length)];

        const button = new ButtonBuilder()
            .setCustomId('train_submit')
            .setLabel('📝 Submit Answer')
            .setStyle(ButtonStyle.Primary);

        const row = new ActionRowBuilder()
            .addComponents(button);

        await interaction.reply({
            content:
                `🧠 **Staff Training Scenario**\n\n` +
                `**Situation:**\n${scenario}\n\n` +
                `Click **📝 Submit Answer** when you're ready to answer.`,
            components: [row],
            ephemeral: true
        });
    }
};
