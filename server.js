
// First, this must be at the top level of your code, **NOT** in any event!
const talkedRecently = new Set(); /*
If you want to make discord-economy guild based you have to use message.author.id + message.guild.id as ID for example:
eco.Daily(message.author.id + message.guild.id)
 
This will create a unique ID for each guild member
*/

//Requiring Packages
const Discord = require("discord.js"); //This can also be discord.js-commando or other node based packages!
const eco = require("discord-economy");

//Create the bot client
const client = new Discord.Client();

//Set the prefix and token of the bot.
const settings = {
  prefix: "!",
  token: "NzExMzc0MDYyODk4OTA1MTM4.Xs_ZsQ.kZRHWBdwa-nM36sg_jUc4VDRVoI"
};

//Whenever someone types a message this gets activated.
//(If you use 'await' in your functions make sure you put async here)
client.on("message", async message => {
  //This reads the first part of your message behind your prefix to see which command you want to use.
  var command = message.content
    .toLowerCase()
    .slice(settings.prefix.length)
    .split(" ")[0];

  //These are the arguments behind the commands.
  var args = message.content.split(" ").slice(1);

  //If the message does not start with your prefix return.
  //If the user that types a message is a bot account return.
  if (!message.content.startsWith(settings.prefix) || message.author.bot) return;
  

  if (command === "order") {
    message.channel.send("Can you stay delivery person? @losh531 is the admin!");
  }
  if (command === "stay") {
    message.channel.send("Can you stay delivery person? @losh531 is the admin!");
  }
  if (command === "qrs") {
    message.channel.send("tuv");
  }
  if (command === "wx") {
    message.channel.send("yz");
  }
  if (command === "now i") {
    message.channel.send("know my");
  }
  if (command === "spam!") {
    //I made 2 examples for this command! Both versions will work!

    var output = await eco.Work(message.author.id);
    //50% chance to fail and earn nothing. You earn between 1-100 coins. And you get one out of 20 random jobs.

    if (output.earned == 0)
      return message.reply(
        "Awh, you did not do your job well so you earned nothing!"
      );

    message.channel.send(`${message.author.username}
You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
You now own :money_with_wings: ${output.balance}`);
  }
if (command === "work") {
      //I made 2 examples for this command! Both versions will work!

      var output = await eco.Work(message.author.id);
      //50% chance to fail and earn nothing. You earn between 1-100 coins. And you get one out of 20 random jobs.

      if (output.earned == 0)
        return message.reply(
          "Awh, you did not do your job well so you earned nothing!"
        );

      message.channel.send(`${message.author.username}
You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
You now own :money_with_wings: ${output.balance}`)};

  if (command === "covid19") {
    message.reply(
      "Support kids in need during the coronavirus outbreak on DonorsChoose! https://www.donorschoose.org/loshbot"
    );
  }

  if (command === "userid") {
    message.channel.send(
      "Hey " +
        "<" +
        "@" +
        message.author +
        ">" +
        "! " +
        "your discord user id is " +
        message.author
    );
  }
  if (command === "bcapsule") {
    var profile = await eco.SubtractFromBalance(message.author.id, -100);
    message.channel.send(
      `You paid 100 coins for a capsule! You now own ${profile.newbalance} coins.`
    );
  }
  if (command === "capsule") {
    var profile = await eco.AddToBalance(
      message.author.id,
      Math.random() * 270
    );
    message.channel.send(
      `You got a capsule! You now own ${profile.newbalance} coins.`
    );
  }

  if (command === "hi") {
    message.channel.send(
      "Hey " +
        "<" +
        "@" +
        message.author +
        ">" +
        "! " +
        "How are you? https://gph.is/g/4AvX2LG"
    );
  }

  if (command === "commands") {
    message.channel.send(`You can do the following commands:
1) ?daily = daily rewards
2) ?balance = check your balance
3) ?lead = see how high you are on the leaderboard!
4) ?donate = give another person money
5) ?work = do work to earn money!
6) ?bet = bet!
7) ?play = play a song! (Loshbot is also music bot)
8) ?pause = pause the song
9) ?hi = Say hi to Loshbot!
10) ?userid = find out what your discord user id is!
11) ?covid19 = Support kids in need during the coronavirus outbreak on DonorsChoose!
*More coming soon!*`);
  }

  if (command === "add") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(
        "**You don't have permission to do that!** *wait how do you even know about this*"
      );
    var profile = await eco.AddToBalance(message.author.id, 10000);

    message.reply(`Added coins! You now own ${profile.newbalance} coins.`);
  }
  if (command === "balance") {
    var output = await eco.FetchBalance(message.author.id);
    message.channel.send(
      `Hey ${message.author.tag}! You own ${output.balance} coins.`
    );
  }

  if (command === "daily") {
    var output = await eco.Daily(message.author.id);
    //output.updated will tell you if the user already claimed his/her daily yes or no.

    if (output.updated) {
      var profile = await eco.AddToBalance(message.author.id, 100);
      message.reply(
        `You claimed your daily coins successfully (100)! You now own ${profile.newbalance} coins.`
      );
    } else {
      message.channel.send(
        `Sorry, you already claimed your daily coins!\nBut no worries, over ${output.timetowait} you can daily again!`
      );
    }
  }

  if (command === "resetdaily") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(
        "**You don't have permission to do that!** *wait how do you even know about this*"
      );

    var output = await eco.ResetDaily(message.author.id);

    message.reply(output); //It will send 'Daily Reset.'
  }

  if (command === "lead") {
    //If you use discord-economy guild based you can use the filter() function to only allow the database within your guild
    //(message.author.id + message.guild.id) can be your way to store guild based id's
    //filter: x => x.userid.endsWith(message.guild.id)

    //If you put a mention behind the command it searches for the mentioned user in database and tells the position.
    if (message.mentions.users.first()) {
      var output = await eco.Leaderboard({
        filter: x => x.balance > 50,
        search: message.mentions.users.first().id
      });
      message.channel.send(
        `The user ${
          message.mentions.users.first().tag
        } is number ${output} on my leaderboard!`
      );
    } else {
      eco
        .Leaderboard({
          limit: 5, //Only takes top 3 ( Totally Optional )
          filter: x => x.balance > 50 //Only allows people with more than 100 balance ( Totally Optional )
        })
        .then(async users => {
          //make sure it is async

          if (users[0]) var firstplace = await client.users.fetch(users[0].userid); //Searches for the user object in discord for first place
          if (users[1]) var secondplace = await client.users.fetch(users[1].userid); //Searches for the user object in discord for second place
          if (users[2]) var thirdplace = await client.users.fetch(users[2].userid); //Searches for the user object in discord for third place
          if (users[3]) var fourthplace = await client.users.fetch(users[3].userid); //Searches for the user object in discord for third place
          if (users[4]) var fithplace = await client.users.fetch(users[4].userid); //Searches for the user object in discord for third place
          if (users[5]) var sixthplace = await client.users.fetch(users[5].userid); //Searches for the user object in discord for third place
          if (users[6]) var sevenplace = await client.users.fetch(users[7].userid); //Searches for the user object in discord for third place
          if (users[7]) var eightplace = await client.users.fetch(users[8].userid); //Searches for the user object in discord for third place
          if (users[8]) var nineplace = await client.users.fetch(users[9].userid); //Searches for the user object in discord for third place
          if (users[9]) var tenplace = await client.users.fetch(users[10].userid); //Searches for the user object in discord for third place

          message.channel.send(`The Loshbot Server leaderboard:
 
1 - ${(firstplace && firstplace.tag) || "Nobody Yet"} : ${(users[0] &&
            users[0].balance) ||
            "None"}
2 - ${(secondplace && secondplace.tag) || "Nobody Yet"} : ${(users[1] &&
            users[1].balance) ||
            "None"}
3 - ${(thirdplace && thirdplace.tag) || "Nobody Yet"} : ${(users[2] &&
            users[2].balance) ||
            "None"}
4 - ${(fourthplace && fourthplace.tag) || "Nobody Yet"} : ${(users[3] &&
            users[3].balance) ||
            "None"}
5 - ${(fithplace && fithplace.tag) || "Nobody Yet"} : ${(users[4] &&
            users[4].balance) ||
            "None"}
6 - ${(sixthplace && sixthplace.tag) || "Nobody Yet"} : ${(users[5] &&
            users[5].balance) ||
            "None"}
7 - ${(sevenplace && sevenplace.tag) || "Nobody Yet"} : ${(users[6] &&
            users[6].balance) ||
            "None"}
8 - ${(eightplace && eightplace.tag) || "Nobody Yet"} : ${(users[7] &&
            users[7].balance) ||
            "None"}
9 - ${(nineplace && nineplace.tag) || "Nobody Yet"} : ${(users[8] &&
            users[8].balance) ||
            "None"}
10 - ${(tenplace && tenplace.tag) || "Nobody Yet"} : ${(users[9] &&
            users[9].balance) ||
            "None"}

`);
        });
    }
  }

  if (command === "donate") {
    var user = message.mentions.users.first();
    var amount = args[1];

    if (!user)
      return message.reply("Reply the user you want to send money to!");
    if (!amount) return message.reply("Specify the amount you want to pay!");

    var output = await eco.FetchBalance(message.author.id);
    if (output.balance < amount)
      return message.reply(
        "You have fewer coins than the amount you want to transfer!"
      );

    var transfer = await eco.Transfer(message.author.id, user.id, amount);
    message.reply(
      `Transfering coins successfully done!\nBalance from ${message.author.tag}: ${transfer.FromUser}\nBalance from ${user.tag}: ${transfer.ToUser}`
    );
  }
  if (command === "rob") {
    var user = message.mentions.users.first();

    if (!user)
      return message.reply("Reply the user you want to send money to!");
    if (!amount) return message.reply("Specify the amount you want to pay!");

    var output = await eco.FetchBalance(message.author.id);
    if (output.balance < amount)
      return message.reply(
        "You have fewer coins than the amount you want to transfer!"
      );

    var rob = await eco.SubtractFromBalance(
      message.author.id,
      user.id,
      Math.floor,
      Math.random() * 10
    );
    message.reply(
      `Transfering coins successfully done!\nBalance from ${message.author.tag}: ${transfer.FromUser}\nBalance from ${user.tag}: ${transfer.ToUser}`
    );
  }
  if (command === "coinflip") {
    var flip = args[0]; //Heads or Tails
    var amount = args[1]; //Coins to gamble

    if (!flip || !["heads", "tails"].includes(flip))
      return message.reply("Please specify the flip, either heads or tails!");
    if (!amount) return message.reply("Specify the amount you want to gamble!");

    var output = await eco.FetchBalance(message.author.id);
    if (output.balance < amount)
      return message.reply(
        "You have fewer coins than the amount you want to gamble!"
      );

    var gamble = await eco
      .Coinflip(message.author.id, flip, amount)
      .catch(console.error);
    message.reply(`You ${gamble.output}! New balance: ${gamble.newbalance}`);
  }

  if (command === "dice") {
    var roll = args[0]; //Should be a number between 1 and 6
    var amount = args[1]; //Coins to gamble

    if (!roll || ![1, 2, 3, 4, 5, 6].includes(parseInt(roll)))
      return message.reply(
        "Specify the roll, it should be a number between 1-6"
      );
    if (!amount) return message.reply("Specify the amount you want to gamble!");

    var output = eco.FetchBalance(message.author.id);
    if (output.balance < amount)
      return message.reply(
        "You have fewer coins than the amount you want to gamble!"
      );

    var gamble = await eco
      .Dice(message.author.id, roll, amount)
      .catch(console.error);
    message.reply(
      `The dice rolled ${gamble.dice}. So you ${gamble.output}! New balance: ${gamble.newbalance}`
    );
  }

  if (command == "delete") {
    //You want to make this command admin only!

    var user = message.mentions.users.first();
    if (!user)
      return message.reply(
        "Please specify a user I have to delete in my database!"
      );
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(
        "**You don't have permission to do that!** *wait how do you even know about this*"
      );
    var output = await eco.Delete(user.id);
    if (output.deleted == true)
      return message.reply(
        "Successfully deleted the user out of the database!"
      );

    message.reply("Error: Could not find the user in database.");
  }

  if (command === "bet") {
    var amount = args[0]; //Coins to gamble

    if (!amount) return message.reply("Specify the amount you want to gamble!");

    var output = await eco.FetchBalance(message.author.id);
    if (output.balance < amount)
      return message.reply(
        "You have fewer coins than the amount you want to gamble!"
      );

    var gamble = await eco
      .Slots(message.author.id, amount, {
        width: 3,
        height: 1
      })
      .catch(console.error);
    message.channel.send(gamble.grid); //Grid checks for a 100% match vertical or horizontal.
    message.reply(`You ${gamble.output}! New balance: ${gamble.newbalance}`);
  }
});

//Your secret token to log the bot in. (never show this to anyone!)
client.login("NzExMzc0MDYyODk4OTA1MTM4.XsCE1A.YRQrNqrIdBqBUwTI6abst1GD6jM");
//https://stackoverflow.com/questions/48432102/discord-js-cooldown-for-a-command-for-each-user-not-all-users
//https://www.npmjs.com/package/discord-economy
// First, this must be at the top level of your code, **NOT** in any event!

//Requiring Packages

//Create the bot client

//Set the prefix and token of the bot.

//Whenever someone types a message this gets activated.
//(If you use 'await' in your functions make sure you put async here)
client.on("message", async message => {
  //This reads the first part of your message behind your prefix to see which command you want to use.
  var command = message.content
    .toLowerCase()
    .slice(settings.prefix.length)
    .split(" ")[0];

  //These are the arguments behind the commands.
  var args = message.content.split(" ").slice(1);

  //If the message does not start with your prefix return.
  //If the user that types a message is a bot account return.
  if (!message.content.startsWith(settings.prefix) || message.author.bot)
    return;

  if (talkedRecently.has(message.author.id)) {
    message.reply(
      "We have added cooldowns so people don't spam the ?work command, so please wait 20 seconds."
    );
  } else {
    // the user can type the command ... your command code goes here :)
    if (command === "7369516569516work") {
      //I made 2 examples for this command! Both versions will work!

      var output = await eco.Work(message.author.id);
      //50% chance to fail and earn nothing. You earn between 1-100 coins. And you get one out of 20 random jobs.

      if (output.earned == 0)
        return message.reply(
          "Awh, you did not do your job well so you earned nothing!"
        );

      message.channel.send(`${message.author.username}
You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
You now own :money_with_wings: ${output.balance}`);

      // Adds the user to the set so that they can't talk for a minute
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
      }, 20000);
    }
  }
});

//Your secret token to log the bot in. (never show this to anyone!)
client.login("NzExMzc0MDYyODk4OTA1MTM4.Xs_ZsQ.kZRHWBdwa-nM36sg_jUc4VDRVoI");
