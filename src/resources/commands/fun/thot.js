// Made with <3 by Pix3l_.

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const bot = require('../../misc/configuration/bot.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('thot')
        .setDescription('Reveals a users true thot score, 101% official thot score. (better than Dank Memer)')
        .addUserOption(option => option.setName('user').setDescription('Enter a user to assess!').setRequired(true)),
    async execute(interaction) {
        if (interaction.options.getUser('user')?.id === interaction.user.id) {
            let rating = Math.floor(Math.random() * 100);

            if (rating < 50) {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('thotties do be thotting')
                    .setDescription(`You are **${rating}%** thot. :slight_smile:`);
                await interaction.reply({ embeds: [embed] });
            } else if (rating < 90) {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('thotties do be thotting')
                    .setDescription(`You are **${rating}%** thot. :smirk:`);
                await interaction.reply({ embeds: [embed] });
            } else {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('thotties do be thotting')
                    .setDescription(`You are **${rating}%** thot. <:flooshed:887865024952025159>`);
                await interaction.reply({ embeds: [embed] });
            }
        } else {
            let rating = Math.floor(Math.random() * 100);

            if (rating < 50) {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('thotties do be thotting')
                    .setDescription(`${interaction.options.getMember('user')?.displayName} is **${rating}%** thot. :slight_smile:`);
                await interaction.reply({ embeds: [embed] });
            } else if (rating < 90) {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('thotties do be thotting')
                    .setDescription(`${interaction.options.getMember('user')?.displayName} is **${rating}%** thot. :smirk:`);
                await interaction.reply({ embeds: [embed] });
            } else {
                const embed = new MessageEmbed()
                    .setColor(bot.embed.defaultColour)
                    .setTitle('thotties do be thotting')
                    .setDescription(`${interaction.options.getMember('user')?.displayName} is **${rating}%** thot. <:flooshed:887865024952025159>`);
                await interaction.reply({ embeds: [embed] });
            }
        }
    }
}

