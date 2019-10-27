const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
      host: localhost,
      user: 'root',
      password: 'Mysql@2019',
      database: 'usr_ofdidp'
    });
}