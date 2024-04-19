const mysql = require('mysql2/promise');
const dbconfig = require('../configs/db.config.js');

const worldConnection = mysql.createPool({
    host: dbconfig.WORLD_HOST,
    user: dbconfig.WORLD_USER,
    password: dbconfig.WORLD_PASSWORD,
    database: dbconfig.WORLD_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const userConnection = mysql.createPool({
    host: dbconfig.USER_HOST,
    user: dbconfig.USER_USER,
    password: dbconfig.USER_PASSWORD,
    database: dbconfig.USER_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = { worldConnection, userConnection };