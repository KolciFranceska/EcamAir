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

