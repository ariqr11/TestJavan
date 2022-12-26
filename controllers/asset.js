const { dbConf, dbQuery } = require('../config/db');
const axios = require('axios')

module.exports = {
    addAsset: async (req, res) => {
        try {
            let product = await axios.get("https://dummyjson.com/products")
            let filter = product.data.products.filter((val) => val.title == req.body.asset)
            let sqlInsert = await dbQuery(`insert into asset(name,price) values ("${req.body.asset}",${filter[0].price});`)
            res.status(200).send({
                message: "Penambahan Asset Berhasil",
                data: sqlInsert
            })
        } catch (error) {
            console.log(error)
        }
    },
    editAsset: async (req, res) => {
        try {
            let product = await axios.get("https://dummyjson.com/products")
            let filter = product.data.products.filter((val) => val.title == req.body.asset)
            let sqlEdit = await dbQuery(`update asset set name="${req.body.asset}",price=${filter[0].price} where idasset=${req.params.id};`)
            res.status(200).send({
                message: "Edit Asset Berhasil",
                data: sqlEdit
            })
        } catch (error) {
            console.log(error)
        }
    },
    deleteAsset: async (req, res) => {
        try {
            let sqlDelete = await dbQuery(`delete from asset where idasset=${req.params.id};`)
            await dbQuery(`delete from assetperuser where assetId=${req.params.id};`)
            res.status(200).send({
                message: "Hapus Asset Berhasil",
                data: sqlDelete
            })
        } catch (error) {
            console.log(error)
        }
    }
}