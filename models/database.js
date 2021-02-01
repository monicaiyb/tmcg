 const path=require('path')
var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const employee= "db.sqlite"
// const employee = path.join(__dirname, "data", "apptest.db");
let db = new sqlite3.Database(employee, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        // create table model for database
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            startDate date
                
            )`,
        db.run(`CREATE TABLE user (
            idDesignation INTEGER PRIMARY KEY AUTOINCREMENT,
            designation text, 
             date)`),
        (err) => {
            if (err) {
                console.log('Table already created')
            }
            else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name, startDate, designation,role,status) VALUES (?,?,?,?,?,?)'
                db.run(insert, ["Nabimanya Nelson John Paul"])
                db.run(insert, ["user","user@example.com",md5("user123456")])
            }
        }
        );  
    }
});


module.exports = db