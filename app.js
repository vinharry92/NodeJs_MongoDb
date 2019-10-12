require('./models/db');
const express = require('express');
const bodyParser= require('body-parser');
var app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const employeecontroller =  require('./controller/employeecontroller');

app.use(bodyParser.urlencoded({
  extended:true
}));
app.set('views',path.join(__dirname,'/views'));
app.engine('hbs', exphbs({ extname:'hbs', defaultLayout:'mainLayout', layoutsDir:__dirname + '/views/layouts'}));
app.set('view engine', 'hbs');


app.listen(3000, function() {
    console.log('listening on 3000')
  })

  app.use('/employee', employeecontroller)