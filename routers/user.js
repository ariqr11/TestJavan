const express = require('express');
const { userController } = require('../controllers');
const route = express.Router();


route.get('/all', userController.getData)
route.post('/add', userController.addData)
route.patch('/edit/:id', userController.editData)
route.delete('/delete/:id', userController.deleteData)
route.post('/inc/:id', userController.incAsset)
route.delete('/dec/:id', userController.decAsset)

module.exports = route;