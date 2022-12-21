let AirEcam = require('../models/model');
const { use } = require('../routes');

let reservationList = [];

exports.reservationList = function (req, res){
    res.render('person.ejs', {ecamair : reservationList});
}

exports.newSeat = function(req, res) {
    let idreservation = req.body.idreservation;
    // let name = req.body.name;
    // let age = req.body.age;
    let destination = req.body.destination;
    let nbseat = req.body.nbseat;

    let newReservation = new AirEcam(idreservation, destination, nbseat);
    reservationList.push(newReservation);

    res.redirect('/persons');
}

exports.newPerson = function(req, res) {
    let idreservation = req.body.idreservation;
    let name = req.body.name;
    let age = req.body.age;
    // let destination = req.body.destination;
    // let nbseat = req.body.nbseat;

    let newReservation = new AirEcam(idreservation, destination, nbseat);
    reservationList.push(newReservation);

    res.redirect('/persons');
}

exports.reservationFormAdd = function(req, res) {
    res.render('home.ejs', {iduser:'-1', destination:'', nbseat:''});
}
exports.personFormAdd = function(req, res) {
    res.render('person.ejs', {iduser:'-1', name:'', age:''});
}