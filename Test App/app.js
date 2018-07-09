//requirements/imports
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator')

//express
var app = express();


//middleware
//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//static resources (css file, jquerey), Set static path
app.use(express.static(path.join(__dirname,'public')));

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//express validator



//test users
var users = [
	{
		id : 1,
		first_name: 'john',
		last_name: 'macdonald',
		email: 'fake1'
	},
	{
		id : 2,
		first_name: 'bill',
		last_name: 'doe',
		email: 'fake2'
	},
	{
		id : 3,
		first_name: 'bob',
		last_name: 'catlow',
		email: 'fake3'
	}
]

//routes
app.get('/', function(req,res){
	res.render('index',{
		title:'Customers',
		users: users
	});
});

app.post('/users/add', function(req,res){
	//creating a new user upon sumbiting the form
	var newUser = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email
	}

	console.log(newUser)
});

//starting a web server
app.listen(3000, function(){
	console.log("Server started on port 3000...")
})