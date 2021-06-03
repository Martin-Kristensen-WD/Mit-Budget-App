const router = require("express").Router()
const pool = require("../db")
const bcrypt = require("bcrypt")
const jwtGenerator = require("../utils/jwtGenerator")
const validInfo = require("../middleware/validInfo")
const authorization = require("../middleware/authorization")

// Register Router
router.post("/register", validInfo, async(reg, res) => {
  try {
    // 1. Destructure reg.body (name, email, password)
    const {name, email, password} = reg.body

    // 2. Check om brugeren eksistere (Hvis brugeren findes - smid fejl)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]) 

    if(user.rows.length !== 0) {
      return res.status(401).json("Der findes allerede en bruger med den email")
    }

    // 3. Bcrypt brugerens password 
    const saltRound = 10 
    const salt = await bcrypt.genSalt(saltRound)

    const bcryptPassword = await bcrypt.hash(password, salt) // SKAL bruge await da det tager tid

    // 4. Sæt ny bruger ind i databasen
    const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", 
    [name, email, bcryptPassword]) 

    // 5. Generating JWT token
    const token = jwtGenerator(newUser.rows[0].user_id)

    res.json({token})
    
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
}); 

// Login Router
router.post("/login", validInfo, async (reg, res) => {
  try {
    // 1. Destructure reg.body (email, password)
    const { email, password } = reg.body 

    // 2. Check om brugeren IKKE eksistere (Hvis ikke - smid fejl)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email])

    if (user.rows.length === 0) {
      return res.status(401).json("Email eller password er forkert!")
    }

    // 3. Check om indgående password er det samme som database password 
    const validPassword = await bcrypt.compare(password, user.rows[0].user_password)

    if(!validPassword){
      return res.status(401).json("Email eller password er forkert!")
    }

    // 4. Giv brugeren JWT
    const token = jwtGenerator(user.rows[0].user_id)

    res.json({token})

   } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

router.get("/data", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM budget")

    return res.status(200).json(data.rows)

  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// Verify router
router.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true)

  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

module.exports = router
