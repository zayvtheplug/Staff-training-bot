import { MessageFlags } from 'discord.js';

export default {
    name: 'train_answer_modal',

    async execute(interaction) {
        const answer = interaction.fields.getTextInputValue('answer');

        await interaction.reply({
            content:
                `✅ **Answer received!**\n\n` +
                `Your answer:\n> ${answer}\n\n` +
                `🧠 AI grading will be added next.`,
            flags: MessageFlags.Ephemeral
        });
    }
};
