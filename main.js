const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost", //obviously deine credentionals hier
    port: "3306", //und hier
    user: "root", //und hier
    password: "root", //und hier
    database: "mydb", //und hier
})

db.connect(err => {
    if (err) {
        console.error("Error connecting to db: ", err.message)
        return
    }
    console.log("Connected to db successfully")
})

