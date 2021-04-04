const express = require("express");
const app = express();
const path = require('path');
const db = require('./config/database');
const users = require("./routes/api/users");
const pg = require('pg');
const bodyParser = require("body-parser");
const http_redirect = require('./http_redirect')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    httpRedirect(app);
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

app.get("/", (req, res) =>{
    res.send("Hello World!")
});

const port = process.env.PORT || 5000;

app.listen(port, () => (console.log(`Listening on port ${port}`)));

app.use("/api/users/", users)


//Test DB

db.authenticate()
    .then(() =>  console.log('Database connected'))
    .catch((error) => console.log(`Error: ${error}`));

