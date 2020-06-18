const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
const Youtube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const { youtubeAPI } = require("../../config.json");
const youtube = new Youtube(youtubeAPI);
module.exports = class LeaveCommand extends Command {
  constructor(client) {
    super(client, {
      name: "np",
      aliases: ["now playing"],
      group: "music",
      memberName: "now playing",
      guildOnly: true,
      description: "See what's playing! (coming soon)"
    });
  }

  async run(message) {
    if (message.guild.musicData.nowPlaying === null) {
   message.channel.send('Nothing is playing buddy!')
    }
    else {
      var nowplaying = new Discord.MessageEmbed()
      .setThumbnail(message.guild.musicData.nowPlaying.thumbnail)
      .setColor("#e9f931")
      .setTitle('Now Playing')//YEES boiii
      .addField('Song Name', message.guild.musicData.nowPlaying.title)
      .addField('Duration', message.guild.musicData.nowPlaying.duration)
      .setFooter("Bot Made by Losh531 in partnership with @houseannor, and the @buddy patrol") //k nvm GOOD
    message.channel.send(nowplaying)}
    };//soooo? idk 
  }//idk what to do so you can help me same here hmm hmm I hope you can do it! I have to go, but you should keep working or whatever! afk k
;
//made by CTK WARRIOR
