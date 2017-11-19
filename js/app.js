const express = require('express');
const hbs = require('express-hbs');
const app = express();

app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));

app.set('views', __dirname + '/views');
app.set('layout', __dirname + '/layout');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
        home: home
    });
});

const port = process.env.PORT || 3001;
app.listen(port);
