let express = require("express")
let router = express.Router()

//let <nom_variable_du controlleur> = require('./controllers/<nom du fichier controlleur>')
let modelController = require('./controllers/modelController');

//router.get('/', <nom_variable_du controlleur>.<nom de la fonction du controlleur>)
router.get('/persons', modelController.reservationList);
router.post('/', modelController.newSeat);
router.post('/persons', modelController.newPerson);
router.get('/persons', modelController.personFormAdd);
router.get('/', modelController.reservationFormAdd);

module.exports = router;