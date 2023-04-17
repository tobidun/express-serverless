const express = require("express");
const students = require("./app.json");
const app = express();

app.use(express.static("public"));
app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("welcome.html");
});

app.get("/about", (req, res, next) => {
  res.render("about.html");
});

app.get("/contact", (req, res, next) => {
  res.render("contact.html");
});

app.get("/mission", (req, res, next) => {
  res.render("mission.html");
});

app.get("/thankyou", (req, res, next) => {
  res.render("thankyou.html");
});

app.get("/students", (req, res, next) => {
  res.send(students);
});

module.exports = app;
