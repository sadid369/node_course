const request = require("request");

const geocode = (address, callback) => {
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoic2FkaWQiLCJhIjoiY2t3YXRkaXFwZGUxajJ1cTFoajE5d2U2aCJ9.WQ0i8_gWW3AdJ5fcqhrSmQ&limit=1`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("could not connect to internet", undefined);
    } else if (response.body.features.length === 0) {
      callback("Location Error occur", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
