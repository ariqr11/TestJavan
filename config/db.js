const mysql = require('mysql');
const util = require('util');

const dbConf = mysql.createPool({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: 'dbtestjavan'
})

const dbQuery = util.promisify(dbConf.query).bind(dbConf)

module.exports = { dbConf, dbQuery }