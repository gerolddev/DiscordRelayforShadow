const Discord = require("discord.js");

// Array for random gifs

var rngHiImg = [
//  'https://media.giphy.com/media/BVStb13YiR5Qs/giphy.gif',
  'https://media.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif',
  'https://media.giphy.com/media/WTmXCoCf60MtW/giphy.gif',
  'https://media.giphy.com/media/PfHrNe1cSKAjC/giphy.gif',
  'https://media.giphy.com/media/lq2quUU0yt3H9TSvKO/giphy.gif',
  'https://media.giphy.com/media/8dFTGEdxRliRq/giphy.gif',
  'https://media.giphy.com/media/zI19V0pvL7VbzQymhm/giphy.gif',
  'https://media.giphy.com/media/3o7budjt6UTWuFSdYA/giphy.gif',
  'https://media.giphy.com/media/6yU7IF9L3950A/giphy.gif',
  'https://media.giphy.com/media/cE02lboc8JPO/giphy.gif',
  'https://media.giphy.com/media/DCOgUFTPoCWqGLoyc7/giphy.gif',
  'https://media.giphy.com/media/5b7kl7U7dmAsyHPd6g/giphy.gif',
  'https://media.giphy.com/media/xUOwGlZwaxzgNbYH8Q/giphy.gif',
  'https://media.giphy.com/media/27c7Jo2GU5tpCEQT0y/giphy.gif',
  'https://media.giphy.com/media/oDwLkh1diFCH6/giphy.gif',
  'https://media.giphy.com/media/8cTe1gsko1LRdl1aGT/giphy.gif',
]


/*
Returns a random gif from a selection saying hi and mentions user calling it
*/

exports.hallo = function (message) {
  message.channel.send(`Hey there, ${message.author}!`, {
    file: rngHiImg[Math.floor(Math.random() * rngHiImg.length)]
  });
}
