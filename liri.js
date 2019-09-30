// /declare variables for dependencies

require("dotenv").config();
//use to request data from bandsintown and omdb
var axios = require("axios");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
//format date and time for concerts
var moment = require("moment")
//declaring globally for formatting purposes
var divider = "\n------------------------------------------------------------\n\n";
//require fs for appending file
var fs = require("fs");

//take user input
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

//switch to process commands

switch (search) {
  case "concert-this":
    concertSearch(term);
    break;
  case "spotify-this-song":
    spotifySearch(term);
    break;
  case "movie-this":
    movieSearch(term);
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
};

//function to search bandsintown
function concertSearch(term) {
  var artist = term;
  var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  axios.get(url).then(
    function (response) {
      // console.log(response.data)

      var jsonData = response.data;
      for (var i = 0; i < jsonData.length; i++) {
        var concertData = [
          "Artist Name: " + jsonData[i].lineup,
          "Concert Time: " + moment(jsonData[i].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A'),
          "Concert Location: " + jsonData[i].venue.city + "," + jsonData[i].venue.region + "," + jsonData[i].venue.country,
          "Concert Venue: " + jsonData[i].venue.name,
        ].join("\n\n");
        fs.appendFile("log.txt", concertData + divider, function (err) {
          if (err) throw err;
          console.log(concertData);
        });
      }
    });
};

//function to search omdb for movies
function movieSearch(term) {
  var movie = term;
  if (!movie) {
      console.log("If you haven't watched 'Mr. Nobody,' then you should.")
      console.log("It's on Netflix!")
      // movie = "Mr. Nobody"
  }
  var url = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
  axios.get(url).then(
      function (response) {
      console.log(response.data)

      var jsonData = response.data;
        var movieData = [
          "Movie Title: " + jsonData.Title,
          "Year: " + jsonData.Year,
          "IMDB Rating: " + jsonData.imdbRating,
          "Rotten Tomatoes: " + jsonData.Ratings[1].Value,
          "Country: " + jsonData.Country,
          "Language: " + jsonData.Language,
          "Plot: " + jsonData.Plot,
          "Actors: " + jsonData.Actors
        ].join("\n\n");
        fs.appendFile("log.txt", movieData + divider, function (err) {
          if (err) throw err;
          console.log(movieData);
        });
      })
};

//function to request song from spotify

function spotifySearch(term) {
  var song = term;
  if (!song) {
      song = "the sign Ace of Base" 
  }
  spotify.search({ type: 'track', query: song }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      var songData = [
        "Song Name: " + data.tracks.items[0].name,
        "Artist Name: " + data.tracks.items[0].artists[0].name,
        "Album Name: " + data.tracks.items[0].album.name,
        "Preview URL: " + data.tracks.items[0].preview_url,
      ].join("\n\n");
      fs.appendFile("log.txt", songData + divider, function (err) {
        if (err) throw err;
        console.log(songData);

    });
  })
}

function doWhatItSays() {
  fs.readFile("random.text", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    console.log(data);
    var dataArr = data.split(",");
    console.log(dataArr);
    if (dataArr[0] === "spotify-this-song") {
      var songcheck = dataArr[1].slice(1, -1);
      console.log("Song Check: "+songcheck)
      spotifySearch(songcheck);
  }
  
  });
}