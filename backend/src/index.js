const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect('mongodb://admin:admin123@ds155313.mlab.com:55313/base-goweek', {
    useNewUrlParser: true
});

//middleware/interceptador
app.use((req, res, next) => {
    req.io = io;

    return next();//para não interrouper o processo
});

app.use(cors());

app.use(express.json());

app.use(require('./routes'));


app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000. :)");
});

