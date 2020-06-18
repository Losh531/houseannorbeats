const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
module.exports = class LeaveCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'invite',
      aliases: [''],
      group: 'music',
      memberName: 'invite',
      guildOnly: true,
      description: 'Invite Houseannor Beats, or Join Support Server!'
    });
  }

run(message) {
const exampleEmbed = new Discord.MessageEmbed()
    .setTitle('Invite Houseannor Beats!')
    .addField('Invite the bot!','[Invite](https://discord.com/api/oauth2/authorize?client_id=718154909194911817&permissions=2147483639&scope=bot)')
    .addField('Join the Support Server!','[Join Houseannor Beats Support Server!](https://discord.gg/SmN9Kkf)')
    .setFooter('Bot Made by Losh531 in partnership with @houseannor, and the @buddy patrol')
exampleEmbed.setColor('#7289da');
message.channel.send(exampleEmbed);
  }
};

 //made by CTK WARRIOR
