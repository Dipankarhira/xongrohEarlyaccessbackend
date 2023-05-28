const cors = require('cors');
const dotenv = require("dotenv");
const express = require("express");

const app = express();
app.use(cors());
dotenv.config({ path: "./config.env" });

const bodyParser = require("body-parser"); 

const PORT = process.env.PORT;
require("./db/connection");


app.use(express.json());
app.use(bodyParser.json());
app.use(require("./routes/auth"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
  