import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  req.route.path == "/" ? console.log(true) : console.log(false);
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
