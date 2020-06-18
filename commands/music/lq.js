const { Command } = require('discord.js-commando');
module.exports = class LoopQueueCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'loop queue',
      aliases: ['lq'],
      group: 'music',
      memberName: 'loopqueue',
      guildOnly: true,
      description: 'Loops the song queue'
    });
  }

  run(message) {
    if (message.guild.musicData.queue.length == 0)
      return message.say('There are no songs in queue!');
    message.guild.musicData.queue.push(...message.guild.musicData.queue);
    return message.say("The queue has been looped");
  }
};