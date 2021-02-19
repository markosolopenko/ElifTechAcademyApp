const express = require("express"); // import the package
const app = express(); // execute it
const cors = require("cors");
const mongoose = require("mongoose"); // add mongo 
require("dotenv/config");

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION, 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    () => {
        console.log("Connected to DB");
    }
);


app.listen(3002, () => {
    console.log("Server has been runed");
});