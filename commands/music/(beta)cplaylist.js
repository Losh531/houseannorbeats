const { Command } = require('discord.js-commando');

module.exports = class LeaveCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'cplaylist',
      aliases: ['mplaylist'],
      group: 'music',
      memberName: 'create playlist',
      guildOnly: true,
      description: 'Create a playlist! (coming soon!)'
    });
  }

  run(message) {
message.channel.send ('Sorry buddy, cplaylist is coming soon, it is currently being tested! It will be ready soon - developer and programer @Losh531')
  }
};
 //made by CTK WARRIOR