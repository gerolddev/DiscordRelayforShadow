const Discord = require("discord.js");

/*
Help command, returns all available commands for the bot
keep this updated!

When the user calls this command in the server the bot will DM the author of
message so that channels will be clear of bot spam.
*/

exports.halpMe = function (message) {
        message.author.send(`

The following commands are available to use with me:

help - lists all available commands
hello - You're a bold one!
time - Gives timestamp for current time

make sure to preface every command with . (dot)!`).catch(console.error);
  }
/*
Keep this maintained.
All available commands should be in this list as a master
*/
