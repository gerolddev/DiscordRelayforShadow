const Discord = require("Discord.js");
const config = require("../auth.json");
const giphy = require("giphy-api");
const request = require("request");

// Calls random gif with specific tag from giphy

let apiKey = config.giphyApiKey;
let tag = 'hello';
let api = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=G`


exports.hallo = function (message) {
  request(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=G`, function (err, response, body, data, embed_url) {
    if(err){
      console.log('error:', error);
    } else {
      message.channel.send(JSON.parse(response.body).data.embed_url);
    }

  });
}
