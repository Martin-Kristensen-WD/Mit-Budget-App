const Pool = require("pg").Pool 

const pool = new Pool({
  user: "postgres",
  password: "auv85qbd", 
  host: "localhost", 
  port: 5432, 
  database: "jwtloginsystem"
})

module.exports = pool; 
