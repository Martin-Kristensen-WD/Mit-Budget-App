import React, { useState } from 'react'

// React Router
import { Link } from 'react-router-dom'

// Assets
import { Turn as Hamburger } from 'hamburger-react'

// Animation
import { motion } from "framer-motion"

// Icons 
import { LogIn, UserPlus }  from 'react-feather'


export const Navigation = () => {

  // State
  const [showMenu, setShowMenu] = useState(false)

  // Animation variants
  const animation = {
    open: { 
      opacity: 1, 
      transition: { duration: 0.5 }
    },
    closed: { 
      opacity: 0
     }
  }

  // Menu 
  let menu

  menu  = 
  <motion.div
    initial={"closed"}
    animate={showMenu ? "open" : "closed"}
    variants={animation}
    className="absolute bg-blue-100 w-full h-full top-20 left-0 pt-8">

    <div className="flex-col">

    <Link to="/register">
      <button className="flex mx-auto bg-blue-450 text-white rounded-full py-2 px-8 mt-6">
          Opret 
          <UserPlus className="ml-2 mt-px" size={20}/>
      </button>
    </Link>

    <Link to="/login">
      <button className="flex mx-auto bg-blue-450 text-white rounded-full py-2 px-8 mt-6">
        Login
        <LogIn className="ml-2 mt-px" size={20}/>
      </button>
    </Link>

    </div> 
  </motion.div>


  return (
    <nav>
      <button onClick={() => setShowMenu(!showMenu)}>
        <Hamburger direction="right" color="#fff" size={30} />
        
     </button>
     {menu}
    </nav>
  )
}

