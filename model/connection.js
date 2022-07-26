const mysql = require("mysql2");

class Connection {
  static createConnection() {
    let configToMySQL = {
      host: "localhost",
      user: "root",
      password: "123456",
      database: "bookmanagement",
    };
    return mysql.createConnection(configToMySQL);
  }
}
module.exports = Connection;
