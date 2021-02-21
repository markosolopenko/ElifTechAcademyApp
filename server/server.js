const express = require('express'); // import the package
const app = express(); // execute it
const cors = require('cors');
const mongoose = require('mongoose'); // add mongo 

require("dotenv/config");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://marko:WtYz6JxWWC50Ds2w@clusterproducts.eapir.mongodb.net/ElifTecAcademy", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Connected to DB");
    }
);

app.use('/main', require('./routes/createBank'));

app.listen(3002, () => {
    console.log("Server has been runed");
});

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));
}