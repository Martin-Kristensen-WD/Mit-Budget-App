import React, { Fragment } from 'react'

// React Router
import { Link } from 'react-router-dom'

// Animation
import { motion } from "framer-motion"

// Components
import { Navigation } from './Navigation'

// Icons 
import { LogIn, LogOut, UserPlus }  from 'react-feather'


const Header = ({isAuthenticated, logout}) => {

  const isLoggedIn = isAuthenticated
  

  return (
    <header className="w-full mx-auto shadow-lg bg-gradient-to-r from-blue-450 to-blue-400 text-white">
      
      {/* Mobile/tablet menu */}
      <div className="flex justify-between pt-3 md:py-4">
        
          <div className="ml-6 mt-2 md:ml-12 md:mt-0">
            <motion.div  
              whileHover={{y: -5}}>
              <Link to="/home"><h1>Mit budget</h1></Link>
             </motion.div>
          </div>
       
          <div className="flex mr-6 mb-3 md:mr-9 md:hidden">
            <Navigation/>
          </div>
      

      {/* Desktop menu */}
        <ul className="hidden md:flex md:justify-end md:space-x-10  md:mr-12 md:text-sm ">
        
        {isLoggedIn ? 
          <button onClick={e => logout(e)}>
            
              <motion.div 
              className="flex"
              whileHover={{y: -5}}>
                <h2>Log ud</h2>
                  <LogOut className="ml-2 mt-px" size={22}/>
              </motion.div>
           
          </button>
         : 
            <Fragment>
            <motion.li 
              whileHover={{y: -5}}>
              <Link to="/register">
                <div className="flex">
                  <h2>Opret bruger</h2>
                    <UserPlus className="ml-2 mt-px" size={22}/>
                </div>
              </Link>
            </motion.li> 

            <motion.li 
              whileHover={{y: -5}}>
              <Link to="/login">
                <div className="flex">
                  <h2>Login</h2>
                    <LogIn className="ml-2 mt-px" size={22}/>
                </div>
              </Link>
            </motion.li> 
            
            </Fragment>
        }
       
            {/*  */}
            

        </ul>
    </div>

    </header>

  )
}

export default Header