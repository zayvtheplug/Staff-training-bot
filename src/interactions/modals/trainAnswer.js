import { MessageFlags } from 'discord.js';
import { getTrainingScenario } from '../../services/trainingService.js';

export default {
    name: 'train_answer_modal',

    async execute(interaction) {
        const answer =
            interaction.fields.getTextInputValue('answer');

        const scenario = getTrainingScenario(
            interaction.guildId,
            interaction.user.id
        );

        if (!scenario) {
            await interaction.reply({
                content:
                    '❌ Your training session expired. Please use `/train` to start a new one.',
                flags: MessageFlags.Ephemeral
            });
            return;
        }

        await interaction.reply({
            content:
                `✅ **Answer received!**\n\n` +
                `**Scenario:**\n${scenario}\n\n` +
                `**Your answer:**\n> ${answer}\n\n` +
                `🧠 **AI grading will be added next.**`,
            flags: MessageFlags.Ephemeral
        });
    }
};
