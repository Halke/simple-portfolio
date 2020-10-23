const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://SuperAdmin:Revolution1@cluster0.921bj.mongodb.net/Skills?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());


app.listen(5000, () => {console.log("The server is running on port 5000!")});