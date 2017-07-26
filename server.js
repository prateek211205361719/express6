
var express = require('express');
var hbs = require('hbs');
hbs.registerPartials(__dirname+'/views/partial');

var app = express();
app.set('view engine', hbs);

var port = process.env.PORT || 3000;
app.get('/' , function(req, res){
    //res.send('hello how are u');
    res.render('home.hbs',{
        title:'Home page'
    });
});
app.get('/about' , function(req, res){
    res.render('about.hbs',{
        title:'about page'
    });
});

app.listen(port, function(){
    console.log('------Application running-----'+port);
});