import React, { Fragment } from 'react'

// React Router
import { Link } from 'react-router-dom'

// Animation
import { motion } from "framer-motion"

// Components
import Header from './Header'
import {Footer} from './Footer'


const Landingpage = ({isAuthenticated}) => {
  return (
  <Fragment>
      <Header isAuthenticated={isAuthenticated}/>
      <div className="relative h-screen ">

        <div className="flex-col justify-center items-center max-w-xl mx-auto p-8 mt-5 md:mt-12">
          <p className="text-blue-150 md:text-lg">Vi ser frem til at hjælpe dig!</p><br/>
          <h1 className="text-2xl md:text-3xl">Med få klik kan du hurtigt lægge et budget</h1>
            <p className="py-5 md:text-lg">Vi tilbyder en nem og hurtig måde for dig at lægge dit budget,
            så du kan danne dig et overblik over din økonomi. 
            Med Mit budget kan du som bruger nemt lave dit budget ved bare et enkelt klik! Vi henter hurtigt data 
            ind fra dine sidste 3 måneders forbrug. Så du kan læne dig tilbage imens Mit budget udfylder budgettet 
            for dig!<br/><br/>
            For at kunne bruge Mit budget skal du oprette en bruger eller logge ind, hvis du allerede har en bruger. </p>
            

            <Link to="/register">
              <motion.button 
                whileHover={{y: -5}}
                className="btn mr-10">
                Opret
              </motion.button>
            </Link>

            <Link to="/login">
              <motion.button 
                whileHover={{y: -5}}
                className="btn">
                Login
              </motion.button>
            </Link>
         
          </div>

        
      <Footer/>
    </div>
    </Fragment>
  )
}

export default Landingpage