const path = require("path");
const express = require("express");
const hbs = require("hbs");

// Define paths for express config
const app = express();
const port = 3000;

// Setup handlebars engine and views location
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
// Setup static directory to serve
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Huu Thanh",
    desc: " Use this site to your weather!",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Huu Thanh",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    name: "Huu Thanh",
    desc: "Help section for Huu Thanh",
  });
});
app.get("/weather", (req, res) => {
  res.send({
    location: "Hanoi",
    temperature: 25,
    weather_descriptions: "sunny",
  });
});
app.get("/help/*", (req, res) => {
  res.render("not-found", {
    errorMess: "Help article not found",
    name: "Huu Thanh",
  });
});
app.get("*", (req, res) => {
  res.render("not-found", {
    errorMess: "Page not found",
    name: "Huu Thanh",
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
