const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./auth.json");
const Request = require("request");
const giphy = require("giphy-api")(config.giphyApiKey);

// Command files
const helpCmd = require("./commands/halp.js");
const countdown = require("./commands/countdown.js");
const kenobi = require("./commands/hellothere.js");
const harryPotter = require("./commands/potter.js");

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
  } else if (msg.startsWith(config.prefix + "hello")) {
    kenobi.hallo(message);
  } else if (msg.startsWith(config.prefix + "potter")) {
    harryPotter.potter(message);
  }
}
);

client.login(config.token);
