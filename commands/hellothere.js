const Discord = require("discord.js");

// Code for Hello there

exports.hallo = function (message) {
  message.reply("You're a bold one!", {
    files: [
      "./images/generalkenobi.gif"
    ]
  });
}
