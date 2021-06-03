const Pool = require("pg").Pool 

const pool = new Pool({
  user: "ptbbvtjy",
  password: "PGWO-C_5Ojtq51UNzG4c17_oxzxfJzOL", 
  host: "tai.db.elephantsql.com", 
  port: 5432, 
  database: "ptbbvtjy"
})

module.exports = pool; 

