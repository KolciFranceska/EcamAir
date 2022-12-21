let express = require("express")
let session = require('express-session')

let app = express()

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

var mysql = require('mysql');
//Database connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ecamair'
});
connection.connect(function (error) { if (error) console.log(error);});

//Send reservation for default URL
app.get('/', (req, res) => {
    connection.query('select * from reservation;', function (error, result) {
        if (error) console.log(error);
        res.render('home.ejs', {ecamair : result});
    });
});

//Send person form
app.get('/persons', (req, res) => {
    res.render('person.ejs');
});

//Save user in db
app.post('/', (req, res) => {
    let reservation ={"destination":req.body.destination, "nbseat":req.body.nbseat, "name":req.body.name, "age":req.body.age};
    connection.query('insert into reservation set ?', reservation, function (err, result) {
        if (err) console.log(err);
        res.redirect('/');
    });
});

//Send validation form
app.get('/validation', (req, res) => {
    res.render('validation.ejs');
});

//Save user in db
app.post('/persons', (req, res) => {
    let person ={"destination":req.body.destination, "nbseat":req.body.nbseat, "name":req.body.name, "age":req.body.age};
    connection.query('insert into reservation set ?', person, function (err, result) {
        if (err) console.log(err);
        res.redirect('/persons');
    });
});

//Send confirmation URL
app.get('/confirmation', (req, res) => {
    res.render('confirmation.ejs');
});

//Send list of users
app.get('/validation', (req, res) => {
    connection.query('select * from reservation;', function (error, result) {
        if (error) console.log(error);
        res.render('validation.ejs', {reservation : result});
    });
});

let router = require('./routes.js')
app.use('/', router)

app.listen(80, () => {
    console.log('Server is running on port 80')
})