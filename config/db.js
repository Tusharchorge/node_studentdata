const mysql = require('mysql2/promise');


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root12345",
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
