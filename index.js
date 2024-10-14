import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  var userRoute;
  req.route.path == "/" ? (userRoute = "Home") : null;
  res.render("index.ejs");
});

app.get("/children", (req, res) => {
  var userRoute;
  req.route.path == "/children" ? (userRoute = "Children") : null;
  res.render("children.ejs");
});

app.get("/contact", (req, res) => {
  var userRoute;
  req.route.path == "/contact" ? (userRoute = "Contact") : null;
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
