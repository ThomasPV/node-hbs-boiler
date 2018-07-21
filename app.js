var express = require('express');
var hbs = require('hbs');
hbs.registerPartials(__dirname+'/views/partials')
var app = express();
app.get('/',(req,res)=>{
    res.render('./index.hbs',{currentYear: new Date().getFullYear()});
})
app.use(express.static(__dirname+'/public'));
app.set('view engine','hbs');
app.listen(3000,()=>{
    console.log('Server running on port: 3000');
});