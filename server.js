const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const log4js = require("log4js");
let logger = log4js.getLogger();

const app = express()

const apiKey = '18adad7accmsh2b58c2080b3a201p1efd97jsn6f6abc0e0569';
logger.level = "debug";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  console.log(req.body);
  let city = req.body.city;
  //let url = `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial&appid=${apiKey}`

  let options = {
    method: 'GET',
    url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
    params: {query: 'Stockholm'},
    headers: {
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': '18adad7accmsh2b58c2080b3a201p1efd97jsn6f6abc0e0569'
    }
  };

  request(options, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

app.listen(3000, function () {
  logger.debug("Example app listening on port 3000!");
})
