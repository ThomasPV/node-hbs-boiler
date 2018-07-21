var express = require('express');
var hbs = require('hbs');
hbs.registerPartials(__dirname+'/views/partials')
var app = express();
const port = process.env.PORT || 3000;
app.use((req,res,next)=>{
res.send('Under Maintanance.');
});
app.get('/',(req,res)=>{
    res.render('./index.hbs',{currentYear: new Date().getFullYear()});
})

app.use(express.static(__dirname+'/public'));
app.set('view engine','hbs');
app.listen(port,()=>{
    console.log(`Server running on port: ${port}`);
});