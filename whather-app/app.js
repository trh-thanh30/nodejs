const { geocode } = require("./utils/geocode.js");
const { whathercode } = require("./utils/whathercode.js");
const adders = process.argv[2];
if (!adders) {
  console.log("Please provide an address");
} else {
  geocode(adders, (error, { latitude, location, longitude }) => {
    if (error) {
      return false;
    }
    whathercode(location, (error, { temperature, weather_descriptions }) => {
      if (error) {
        return false;
      }
      console.log(
        "Location:",
        location,
        "Latitude:",
        latitude,
        "Longitude: ",
        longitude
      );
      console.log(
        "Weather descriptions:",
        weather_descriptions,
        "and the temperature is:",
        temperature
      );
    });
  });
}
