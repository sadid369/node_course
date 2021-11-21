const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=07576112832c04ea8b768d26273df626&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
