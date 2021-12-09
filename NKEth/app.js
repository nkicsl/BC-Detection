var express = require('express');
var app = express();
var path = require('path');

app.set("view engine", 'html');
app.use(express.static(path.join(__dirname, '/views')));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/public/html/NKEth.html');
});

var server = app.listen(3000, function () {
    console.log("server running at http://localhost:3000...");
});