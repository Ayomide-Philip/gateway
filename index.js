import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import welcome, { newsLetter, statementOfFaiths } from "./home.js";
import service from "./service.js";
import requireIp from "request-ip";
import teenager from "./teenager.js";

const app = express();
const port = 3000;
app.use(express.static("public"));

var userRoute;

const ipLogger = function (req, res, next) {
  console.log(`User IPaddress: ${requireIp.getClientIp(req)}`);
  next();
};

app.use(morgan("combined"));
app.use(ipLogger);

app.get("/", (req, res) => {
  req.route.path == "/" ? (userRoute = "Home") : null;
  res.render("index.ejs", {
    userRoute: userRoute,
    welcome: welcome,
    newsLetter: newsLetter,
    statementOfFaiths: statementOfFaiths,
  });
});

app.get("/children", (req, res) => {
  req.route.path == "/children" ? (userRoute = "Children") : null;
  res.render("children.ejs", { userRoute: userRoute });
});

app.get("/contact", (req, res) => {
  req.route.path == "/contact" ? (userRoute = "Contact") : null;
  res.render("contact.ejs", { userRoute: userRoute });
});

app.get("/donate", (req, res) => {
  req.route.path == "/donate" ? (userRoute = "Donate") : null;
  res.render("donate.ejs", { userRoute: userRoute });
});

app.get("/events", (req, res) => {
  req.route.path == "/events" ? (userRoute = "Events") : null;
  res.render("events.ejs", { userRoute: userRoute });
});

app.get("/get-involved", (req, res) => {
  req.route.path == "/get-involved" ? (userRoute = "Get Involved") : null;
  res.render("getInvolved.ejs", { userRoute: userRoute });
});

app.get("/history", (req, res) => {
  req.route.path == "/history" ? (userRoute = "History") : null;
  res.render("history.ejs", { userRoute: userRoute });
});

app.get("/mission", (req, res) => {
  req.route.path == "/mission" ? (userRoute = "Mission") : null;
  res.render("mission.ejs", { userRoute: userRoute });
});

app.get("/sermon", (req, res) => {
  req.route.path == "/sermon" ? (userRoute = "Sermon") : null;
  res.render("sermon.ejs", { userRoute: userRoute });
});

app.get("/service", (req, res) => {
  req.route.path == "/service" ? (userRoute = "Service") : null;
  res.render("service.ejs", { userRoute: userRoute, service: service });
});

app.get("/teenager", (req, res) => {
  req.route.path == "/teenager" ? (userRoute = "Teenager") : null;
  res.render("teenager.ejs", { userRoute: userRoute, teenager: teenager });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
