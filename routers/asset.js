const express = require('express');
const { assetController } = require('../controllers');
const route = express.Router();


route.post('/add', assetController.addAsset)
route.patch('/edit/:id', assetController.editAsset)
route.delete('/delete/:id', assetController.deleteAsset)

module.exports = route;