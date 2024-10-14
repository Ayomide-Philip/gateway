import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});