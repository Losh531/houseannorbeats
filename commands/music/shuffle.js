const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const shuffle = (array) => {
  let currentIndex = array.length
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

module.exports = class ShuffleQueueCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'shuffle',
      memberName: 'shuffle',
      group: 'music',
      description: 'Shuffle the song queue',
      guildOnly: true
    });
  }
run(message) {
const currentQueue = message.guild.musicData.queue
const shuffledQueue = shuffle(currentQueue)
message.guild.musicData.queue = shuffledQueue
 if (message.guild.triviaData.isTriviaRunning)
      return message.say('Try again after the trivia has ended');
    if (message.guild.musicData.queue.length == 0)
      return message.say('There are no songs in queue!');
    const titleArray = [];
    message.guild.musicData.queue.map(obj => {
      titleArray.push(obj.title);
    });
    var queueEmbed = new MessageEmbed()
      .setColor('#ff7373')
      .setTitle('Music Queue has been shuffled :thumbsup: ')
    .setFooter('Bot Made by Losh531 in partnership with @houseannor, and the @buddy patrol')
      .setThumbnail('https://cdn.discordapp.com/attachments/705752176592551996/718437955466952734/Houseannor_Beats_Render_Remix_PFP_PNG.png');
    for (let i = 0; i < titleArray.length; i++) {
      queueEmbed.addField(`${i + 1}:`, `${titleArray[i]}`);
    }
    return message.say(queueEmbed);return;
  
  }
}
