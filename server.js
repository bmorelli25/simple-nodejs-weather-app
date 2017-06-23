const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '************';
let config = {
  weather: null,
  error: null
};

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', config);
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      config.error = 'Error, please try again';
      res.render('index', config);
    } else {
      let weather = JSON.parse(body)
      config.weather = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      res.render('index', config);
    }
  });

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
