const request = require("request");

// const url =
//   "http://api.weatherstack.com/current?access_key=07576112832c04ea8b768d26273df626&query=23.6850,90.3563&units=m";

// request({ url: url, json: true }, (error, response) => {
//   // console.log(
//   //   `It is currently ${response.body.current["temperature"]} degress out.its feels like ${response.body.current["feelslike"]} out`
//   // );
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable ot find location");
//   } else {
//     console.log(
//       `location ${response.body.location.country} ${response.body.location.region} ${response.body.current.weather_descriptions[0]} . It is currently ${response.body.current.temperature} degress out.its feels like ${response.body.current.feelslike} out`
//     );
//   }
// });
const url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FkaWQiLCJhIjoiY2t3YXRkaXFwZGUxajJ1cTFoajE5d2U2aCJ9.WQ0i8_gWW3AdJ5fcqhrSmQ&limit=1";
request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("could not connect to internet");
  } else if (response.body.features.length == 0) {
    console.log("Error occur");
  } else {
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(latitude, longitude);
  }
});
