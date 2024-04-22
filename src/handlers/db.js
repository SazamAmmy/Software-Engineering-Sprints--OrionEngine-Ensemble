const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST || "database",
    user: "user",
    password: "password",
    database: "world",
    waitForConnections: true
});

module.exports = pool;