const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
module.exports = class LeaveCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'credits',
      aliases: ['c'],
      group: 'music',
      memberName: 'credits',
      guildOnly: false,
      description: 'See who contributed to the making of Houseannor Beats!'
    });
  }

run(message) {
const exampleEmbed = new Discord.MessageEmbed()
    .setTitle("Credits")
    .addField('Main Creator','Losh531#4996')
    .addField('Helper','HaroonGames#2334')
    // .addField('YouTube API Sourcer', 'Anish#2746')//test! ok
    .setFooter('Bot Made by Losh531 in partnership with @houseannor, and the @buddy patrol')
    .setColor('#7289da');
message.channel.send(exampleEmbed);
  }
};
 //made by CTK WARRIOR
