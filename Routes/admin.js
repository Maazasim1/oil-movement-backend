const express = require("express")
const router = express.Router()
const pool = require('../Middleware/connection')
const bodyParser = require("body-parser")
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()


