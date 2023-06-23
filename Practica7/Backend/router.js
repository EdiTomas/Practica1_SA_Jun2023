const express = require('express')
const Consult  =require('./Consulta')

const router = express.Router();


router.get('/GetDatos', Consult.getUser);
module.exports = router;    