const express = require('express')
const  HomeController = require('../controllers/HomeController')


const router = express.Router()

router.get("/", HomeController.showHome)
router.get("/produtos", HomeController.showProdutos)

module.exports = router