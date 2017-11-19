const express = require('express');
const app = express();

app.configure(function(){
    app.set('views', __dirname + 'views');
    app.set('view engine', 'twig');

    // This section is for setting twig optional options for configuring twig through express
    app.set('twig options', {
        strict_variables: false
    });
});

const header = Twig.twig({
    data: header-template,
    namespaces: { 'header': '../app/views/layout/' }
});

const footer = Twig.twig({
    data: header-template,
    namespaces: { 'footer': '../app/views/layout/' }
});

app.get('/', function(req, res) {
    res.render('header');
    res.render('footer');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
