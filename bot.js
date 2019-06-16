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
  var msg = message.content.toLowerCase();
  var reply = message.reply
// Main text commands for bot
  if (msg.startsWith(config.prefix + "help")) {
    helpCmd.halpMe(message);
  } else if (msg.startsWith(config.prefix + "ping")) {
    reply("pong!");
  } else if (msg.startsWith(config.prefix + "foo")) {
    reply("bar!");
  } else if (msg.startsWith(config.prefix + "hello there")) {
    reply("You're a bold one!", {
      files: [
        "./images/generalkenobi.gif"
      ]
    });
  }
});

client.login(config.token);
