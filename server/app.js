const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;
const app = express();
const path = require("path");
const dotenv = require("dotenv");

if (process.env.NODE_ENV == "dev") {
  dotenv.config({ path: ".env.dev" });
} else if (process.env.NODE_ENV == "production") {
  dotenv.config({ path: ".env.production" });
}

// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// handling cors errors
app.use(cors());

// getting the current directory path here...
__dirname = path.resolve();

// console.log("path is " , path.resolve());

console.log(
  "path is : ",
  path.resolve(__dirname, "../", "client/build/index.html")
);

// NodeENV AKADA
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send("Server is Running! 🚀");
  });
}

//error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;
