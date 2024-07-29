const request = require("postman-request");
const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${address}&access_token=pk.eyJ1IjoidGhhbmgzMCIsImEiOiJjbHozdmM3NmcwMnp2MmtvaGQ0eW9yZzR5In0.5QAF3-JqCStdVCqSBoDz3g`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location", undefined);
    } else {
      const { coordinates } = response.body.features[0].geometry;
      const { full_address } = response.body.features[0].properties;
      callback(undefined, {
        latitude: coordinates[1],
        longitude: coordinates[0],
        location: full_address,
      });
    }
  });
};
module.exports = { geocode };
