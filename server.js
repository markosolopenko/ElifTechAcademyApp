const express = require('express'); // import the package
const app = express(); // execute it
const cors = require('cors');
const mongoose = require('mongoose'); // add mongo 

require("dotenv/config");

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Connected to DB");
    }
);

app.use('/main', require('./routes/createBank'));

app.listen(process.env.PORT || 3002, () => {
    console.log("Server has been runed");
});

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
})
