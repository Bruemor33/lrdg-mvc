const express = require('express');
const hbs = require('express-hbs');
const app = express();

app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'hbs');
});

app.get('/', function(req, res) {
    req.params
    res.render('home', {
        home: home,
        layout: 'layout/home'
    });
});

const port = process.env.PORT || 8080;
app.listen(port);
