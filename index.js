const express = require('express');
const app = express();
let path = require('path');
let ejs = require('ejs');
let bodyParser = require('body-parser');
let session = require('express-session');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.engine('html',ejs.__express);
app.set('view engine','html');
app.all('*',(req,res,next) =>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-type,Accept');
	res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
	res.header('Content-type','text/html;charset=utf-8');
	next();
})
var apiRoute = require('./controllers/routes.js');
app.use('/',apiRoute);
app.listen('8080');