const mysql = require('mysql2/promise');
require('dotenv').config();


const db = mysql.createPool({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "student_db",
});


db.getConnection()
  .then(() => {
    console.log("✅ MySQL connection pool created successfully.");
  })
  .catch((err) => {
    console.error("❌ Error creating MySQL connection pool:", err.message);
  });


module.exports = db;
