//UPTIME CALLBACK
const http = require("http");
const express = require("express");
const app = express();
var server = http.createServer(app);

app.get("/", (request, response) => {
  console.log(`Thanks for pinging me lol!`);
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Houseannor Beats");
});

const listener = server.listen(process.env.PORT, function() {
  console.log(`Your app is listening on port ` + listener.address().port);
});
setInterval(() => {
  http.get(`http://sleet-good-potassium.glitch.me/`); //Do for good hosting
}, 280000);

const { command } = require("discord.js");
const { CommandoClient } = require("discord.js-commando");
const { Structures } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const path = require("path");
const { prefix } = require("./config.json");


Structures.extend("Guild", Guild => {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        nowPlaying: null,
        songDispatcher: null,
        volume: 1
      };
      this.triviaData = {
        isTriviaRunning: false,
        wasTriviaEndCalled: false,
        triviaQueue: [],
        triviaScore: new Map()
      };
    }
  }
  return MusicGuild;
});

const client = new CommandoClient({
  commandPrefix: prefix,
  owner: "708042832237297665" // change this to your Discord user ID
});
if (command === "@losh531") {
}
client.registry
  .registerDefaultTypes()
  .registerGroups([
    ["music", "Music Command Group"]
    //oh wait Losh here is the error what is it though NOOOOO YOU BROKE THE BOTTTTT
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    eval: true,//test last time
    prefix: true, //so can you help? Lets try. .. one sec let me get home np
    commandState: false
  })
  .registerCommandsIn(path.join(__dirname, "commands"));

const activities_list = [
  "the Buddy Patrol!",
  "h_help",
  "h_invite",
  "Music!",
  "My Prefix is h_",
  "Beta testing", // losh did you make the project public?
  `Currently in ${client.guilds.cache.size}+ Servers!`//WOW! COOL IDEA there
]; // creates an arraylist containing phrases you want your bot to switch through.
const type = ["LISTENING", "WATCHING", "PLAYING", "STREAMING"]; // creates an arraylist containing phrases you want your bot to switch through.
client.on("ready", () => {
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    const type2 = Math.floor(Math.random() * (type.length - 1) + 1);
    client.user.setActivity(activities_list[index], { type: "LISTENING" }); // sets bot's activities to one of the phrases in the arraylist.
  }, 10000); // Runs this every 10 seconds.
  //
  //Sorry Everyone! I hit my limit of 10,000 songs a day! I will be back tommorow
});

client.login(process.env.TOKEN);
//I got it now :) hmm nvm