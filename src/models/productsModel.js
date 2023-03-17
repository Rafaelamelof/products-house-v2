const database = require ("../database/db.json")
const fs = require ('fs')
const path = require('path')
const pathDb = path.resolve('src',"database", "db.json")

const productsModel = {
    findAll: () => {
        return database.products
    },
//método que irá procurar somente um produto
    findByPk:(id) => {
        const product = database.products.find(product => product.id === id)
        return product
    },

    create: (product) =>{
        database.products.push(product);

        const dbJson = JSON.stringify(database)
        fs.writeFileSync(pathDb, dbJson, 'utf8')
    },

    update: (id, products) => {},

    delete: (id) => {}


}

module.exports = productsModel