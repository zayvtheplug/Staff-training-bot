import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    MessageFlags
} from 'discord.js';

const scenarios = [
    {
        situation:
            "A member keeps spamming messages after you already warned them. What would you do?",
        goodAnswer:
            "You should explain that the member has already been warned and take an appropriate action based on the server rules, such as a timeout if the rules allow it."
    },
    {
        situation:
            "Two members start arguing and insulting each other in general chat. What should you do?",
        goodAnswer:
            "You should stay calm, stop the argument from escalating, remind them of the rules, and take appropriate action if they continue breaking the rules."
    },
    {
        situation:
            "A member reports another user for breaking a rule, but you do not have enough information to confirm what happened. What do you do?",
        goodAnswer:
            "You should investigate before taking serious action. Do not punish someone based only on an accusation."
    },
    {
        situation:
            "A friend of yours breaks a server rule. Should you ignore it because they are your friend?",
        goodAnswer:
            "No. Staff should apply the rules fairly and avoid giving friends special treatment."
    },
    {
        situation:
            "A member is angry about receiving a punishment and starts arguing with you. How should you respond?",
        goodAnswer:
            "Stay professional, explain the reason for the punishment calmly, and avoid arguing back or making the situation worse."
    }
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

        await interaction.reply({
            content:
                `🧠 **Staff Training Scenario**\n\n` +
                `**Situation:**\n${scenario.situation}\n\n` +
                `**What would you do?**\n` +
                `Reply with your decision below.`,
            flags: MessageFlags.Ephemeral
        });
    }
};
