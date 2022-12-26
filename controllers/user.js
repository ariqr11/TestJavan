const { dbConf, dbQuery } = require('../config/db');

module.exports = {
    getData: async (req, res) => {
        try {
            let result = await dbQuery(`SELECT * from user`)
            for (let i = 0; i < result.length; i++) {
                let asset = await dbQuery(`Select asset.name,asset.price from assetperuser join asset on assetperuser.assetId = asset.idasset where assetperuser.userId = ${result[i].iduser}`)
                result[i].asset = asset
                result[i].totalAsset = result[i].asset.reduce((a, b) => {
                    return parseInt(a) + parseInt(b.price);
                }, 0);
            }
            res.status(200).send(result)
        } catch (error) {
            console.log(error)
        }
    },
    addData: async (req, res) => {
        try {
            let sqlInsert = await dbQuery(`insert into user(name,gender,parent) values ("${req.body.name}","${req.body.gender}","${req.body.parent}");`)
            res.status(200).send({
                message: "Penambahan Berhasil",
                data: sqlInsert
            })
        } catch (error) {
            console.log(error)
        }
    },
    editData: async (req, res) => {
        try {
            let sql = []
            for (const key in req.body) {
                if (key != 'iduser') {
                    sql.push(`${key}="${req.body[key]}"`)
                }
            }
            let sqlEdit = await dbQuery(`update user set ${sql.join(',')} where iduser=${req.params.id};`)
            res.status(200).send({
                message: "Edit Berhasil",
                data: sqlEdit
            })
        } catch (error) {
            console.log(error)
        }
    },
    deleteData: async (req, res) => {
        try {
            let sqlDelete = await dbQuery(`delete from user where iduser=${req.params.id};`)
            await dbQuery(`delete from assetperuser where userId=${req.params.id}`)
            res.status(200).send({
                message: "Hapus Berhasil",
                data: sqlDelete
            })
        } catch (error) {
            console.log(error)
        }
    },
    incAsset: async (req, res) => {
        try {
            let asset = await dbQuery(`select asset.idasset from asset where asset.name = "${req.body.asset}"`)
            let sqlInc = await dbQuery(`insert into assetperuser(userId,assetId) values (${req.params.id},${asset[0].idasset});`)
            res.status(200).send({
                message: "Penambahan Asset Berhasil",
                data: sqlInc
            })
        } catch (error) {
            console.log(error)
        }
    },
    decAsset: async (req, res) => {
        try {
            let asset = await dbQuery(`select asset.idasset from asset where asset.name = "${req.body.asset}"`)
            let sqlDec = await dbQuery(`delete from assetperuser where userId=${req.params.id} and assetId = ${asset[0].idasset};`)
            res.status(200).send({
                message: "Hapus Asset Berhasil",
                data: sqlDec
            })
        } catch (error) {
            console.log(error)
        }
    }
}