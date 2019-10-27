const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
      host: process.env.DATABASE_HOST,
      user: 'root',
      password: 'Mysql@2019',
      database: 'usr_ofdidp'
    });
}