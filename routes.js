let express = require("express")
let router = express.Router()

//let <nom_variable_du controlleur> = require('./controllers/<nom du fichier controlleur>')
let modelController = require('./controllers/modelController');

//router.get('/', <nom_variable_du controlleur>.<nom de la fonction du controlleur>)
router.get('/', modelController.newSeat);
router.get('/persons', modelController.newPerson);

module.exports = router;