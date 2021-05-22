var express = require('express');
var app = express();

app.use(express.static("views/"))
app.set('view engine', 'ejs');
app.get("/", function (req, res) {
    res.render("index")
});

app.listen(8080)