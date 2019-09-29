require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var artist = process.argv[2];
var concert = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
// var song = 

console.log(concert);

axios
.get(concert)
.then(function(response) {
    console.log(response.data.venue);
    console.log(response.region);
    console.log(response.city);
    console.log(response.datetime);
  })