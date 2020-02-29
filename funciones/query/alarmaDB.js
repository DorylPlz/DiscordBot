const config = require("../../config.json");
const mysql = require("mysql");

const db = 
    mysql.createConnection({
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database
    });



function check(){
        

}



module.exports = {
    check
};