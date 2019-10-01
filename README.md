# LIRI Bot

LIRI takes commands from the terminal and outputs the desired information accordingly. It uses node so that you can run it in the terminal and not a browser.

## Commands Used By LIRI
`concert-this`
`movie-this`
`spotify-this-song`
`do-what-it-says`

## Technologies in Use
- NODE
- Javascript

## NPM Packages in Use
- [Axios](https://www.npmjs.com/package/axios)
- [Spotify](https://www.npmjs.com/package/node-spotify-api)
- [Moment](https://www.npmjs.com/package/moment)
- [dotenv](https://www.npmjs.com/package/dotenv)

## How to Use LIRI Bot
### concert-this
![Concert-This Example](https://media.giphy.com/media/KEk004GzH4lT60pdkN/giphy.gif)

- The user types "node liri.js concert-this <artist/band name>" into the terminal
- The concert search method then makes a request to the bandsintown API based on the argument passed in by the user.
- Once results are populated, they are console logged and appended to the log.txt file.

### movie-this
![Movie-This Example](https://media.giphy.com/media/LPrOhrB1PGYS7FCXjE/giphy.gif)

- The user types "node liri.js movie-this <movie name>" into the terminal
- The movie search method then makes a request to the OMDB API based on the argument passed in by the user.
- Once results are populated, they are console logged and appended to the log.txt file.
  
### spotify-this-song
![Spotify-This-Song Example](https://media.giphy.com/media/hoIe29joEvoclnYKkY/giphy.gif)

- The user types "node liri.js spotify-this-song <song title>" into the terminal
- The spotify search method then makes a request to the spotify API based on the argument passed in by the user.
- Once results are populated, they are console logged and appended to the log.txt file.
- If the user does not specify a song, "The Sign" by Ace of Base is console legged and appended to the log.txt file.
  
### do-what-it-says
![Do-What-It-Says Example](https://media.giphy.com/media/L4BFj4BLJ78ITJNfEU/giphy.gif)

- The user types "node liri.js do-what-it-says" into the terminal
- The doWhatItSays function then reads the random.text file and outputs the data in the console log as well as appending it to the log.txt.

## Author
Joshua Fowler
