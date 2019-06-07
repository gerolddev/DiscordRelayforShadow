const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./auth.json");

client.on("ready", () => {
  console.log("I am ready!");
});

// Prefix is auth.prefix from auth.json
client.on("message", (message) => {

// Stops if there is no prefix or the message is from a bot
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

// Makes the commands case insensitive
    message.content = message.content.toLowerCase();

/*
Help command, returns all available commands for the bot
keep this updated
*/
  if (message.content.startsWith(config.prefix + "help")) {
    message.author.send(`The following commands are available to use with me:

help - lists all available commands
Hello there - You're a bold one!

make sure to preface every command with . (dot)!`)
  }

// Main text commands for bot
  if (message.content.startsWith(config.prefix + "ping")) {
    message.reply("pong!");
  } else
  if (message.content.startsWith(config.prefix + "foo")) {
    message.reply("bar!");
  } else
  if (message.content.startsWith(config.prefix + "hello there")) {
    message.reply("You're a bold one!", {
      files: [
        "./images/generalkenobi.gif"
      ]
    });
  }
});

client.login(config.token);
