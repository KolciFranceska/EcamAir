let mysql = require("mysql")


let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '<mdp du user root>',
    database: '<nom de la base de donnée>'
})

connection.connect(function (error) { if (error) console.log(error); })

module.exports = connection