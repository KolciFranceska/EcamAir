//exemple de modèle de produit avec méthode get à la base de donnée

let connection = require('../database')

class Product {
    constructor(id, name, price, description, image) {
        this.id = id
        this.name = name
        this.price = price
        this.description = description
    }
    static getAll(callback) {
        connection.query('SELECT * FROM product', function (error, results, fields) {
            if (error) throw error
            callback(results)
        })
    }
}
