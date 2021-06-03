const express = require("express") // Hente Express libary
const app = express()  // Gem Express i en variable App  

// Middleware 
const cors = require("cors")

app.use(express.json()) //Når man vil tilgå data fra client side har man adgang til reg.body
app.use(cors()) //Gør det muligt at backend kan snakke sammen med frontend


// Routes 

// Register & login routers
app.use("/auth", require("./routes/jwtAuth"))

// Dashboard route 
app.use("/dashboard", require("./routes/dashboard"))

// Data route 
app.use("/data", require("./routes/jwtAuth"))


app.listen(5000, () => { // Lytter til en port 
  console.log("server is running on port 5000")
});                         


