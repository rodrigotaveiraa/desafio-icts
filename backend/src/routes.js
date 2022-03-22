const express = require('express')
const routes = express.Router()
const multer = require('multer')

const products = require('./controllers/productsController')

const multerConfig = multer()

routes.post('/products', multerConfig.single('file'), products.dumpProducts)


module.exports = routes