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
    connection.query('select * from ecamair;', function (error, result) {
        if (error) console.log(error);
        res.render('home.ejs', {ecamair : result});
    });
});



let router = require('./routes.js')
app.use('/', router)

app.listen(80, () => {
    console.log('Server is running on port 80')
})