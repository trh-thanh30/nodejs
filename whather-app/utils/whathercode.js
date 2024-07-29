const request = require("postman-request");
const whathercode = (address, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=80551311480b00068d717051f806d6fb&query=${address}&units=f`;
  request({ url: url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to weather service!", undefined);
    } else if (res.body.error) {
      callback("Unable to find location", undefined);
    } else {
      const { temperature, weather_descriptions } = res.body.current;
      const { query } = res.body.request;
      callback(undefined, {
        temperature: temperature,
        weather_descriptions: weather_descriptions[0],
        location: query,
      });
    }
  });
};
module.exports = { whathercode };
