require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const path = require("path");

const app = express();
const PORT = 8080;
const indexPath = path.join(__dirname, 'dist', 'index.html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api", routes);
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/comics', express.static(path.join(__dirname, 'comics')));

app.get('*', (req, res) => {
  res.sendFile(indexPath);
});

app.listen(PORT, () => console.log("Server started"));
