const { Command } = require('discord.js-commando');

module.exports = class SkipCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'skip',
      aliases: ['skip-song', 'push on'],
      memberName: 'skip',
      group: 'music',
      description: 'Skip the current playing song',
      guildOnly: true
    });
  }

  run(message) {
   message.channel.send ('React Above to Skip!^^')
    message.react('👍').then(() => message.react('👎')); 

const filter = (reaction, user) => { 
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id; 
};  

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] }) .then(collected => { 
    const reaction = collected.first(); 

    if (reaction.emoji.name === '👍') 
    {           
        message.channel.send ('Skipping!'); 
          const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('Join a channel and try again');

    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher == null
    ) {
      return message.reply('There is no song playing right now!');
    }
    message.guild.musicData.songDispatcher.end();
    } 
    else 
    {           
        message.channel.send ('Voted to not skip!'); 
    }}).catch(collected => {        
    message.reply('Tmeout'); });

  }
};
