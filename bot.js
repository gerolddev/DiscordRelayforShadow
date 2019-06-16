const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./auth.json");
const helpCmd = require("./commands/halp.js");

client.on("ready", () => {
  console.log("Ready to rock and/or roll");
});

// Prefix is auth.prefix from auth.json
client.on("message", (message) => {

// Stops if there is no prefix or the message is from a bot
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

// Makes the commands case insensitive
  message.content = message.content.toLowerCase();
// Main text commands for bot
  if (message.content.startsWith(config.prefix + "help")) {
    helpCmd.halpMe(message);
  } else if (message.content.startsWith(config.prefix + "ping")) {
    message.reply("pong!");
  } else if (message.content.startsWith(config.prefix + "foo")) {
    message.reply("bar!");
  } else if (message.content.startsWith(config.prefix + "hello there")) {
    message.reply("You're a bold one!", {
      files: [
        "./images/generalkenobi.gif"
      ]
    });
  }
});

client.login(config.token);
