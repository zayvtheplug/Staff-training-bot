import {
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder
} from 'discord.js';

export default {
    name: 'train_submit',

    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId('train_answer_modal')
            .setTitle('Staff Training Answer');

        const answerInput = new TextInputBuilder()
            .setCustomId('answer')
            .setLabel('What would you do?')
            .setPlaceholder('Explain how you would handle the situation...')
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true)
            .setMinLength(5)
            .setMaxLength(2000);

        const row = new ActionRowBuilder().addComponents(answerInput);

        modal.addComponents(row);

        await interaction.showModal(modal);
    }
};
