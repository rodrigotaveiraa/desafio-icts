const express = require('express')
const routes = express.Router()
const multer = require('multer')

const products = require('./controllers/productsController')
const politicas = require('./controllers/politicasController')

const multerConfig = multer()

routes.post('/produtos', multerConfig.single('file'), products.dumpProducts)

routes.post('/politicas', politicas.createPoliticas)
routes.get('/politicas', politicas.listPoliticas)
routes.get('/politicas/:id', politicas.getPolitica)


module.exports = routes