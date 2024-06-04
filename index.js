// Initialization
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./src/models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoDbPath = "mongodb+srv://nayem123:nayemI2006@cluster0.s6igsjj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoDbPath).then(function() {
    app.get("/", function(req, res) {
        const response = { statuscode: res.statusCode, message: "API Works!" };
        res.json(response);
    });
    
    const noteRouter = require('./src/routes/Note');
    app.use("/notes", noteRouter);
});










// Starting the server on a PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log("Server started at PORT: " + PORT);
});





