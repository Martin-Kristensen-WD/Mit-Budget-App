import React, { useState } from 'react'

// React Router
import {Link} from "react-router-dom"

// Notifikationer
import {toast} from 'react-toastify'

// Animation
import { motion } from "framer-motion"

// Icons
import { AtSign, Lock, LogIn }  from 'react-feather'

// Components
import Header from './Header'
import { Footer } from './Footer'

const Login = ({ setAuth }) => {

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })

  const {email, password} = inputs

  const onChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value})
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    const body = { email, password }

    try {

      const response = await fetch("http://localhost:5000/auth/login", {
          method: "POST",
          headers: {"Content-type": "application/json"},
          body: JSON.stringify(body)
        })

        const parseRes = await response.json(); // Genere JWT token

        if(parseRes.token) {
          localStorage.setItem("token", parseRes.token) // Gemmer token i localStorage
          setAuth(true)
          toast.success("Du er logget ind!", {
            position: toast.POSITION.TOP_CENTER
          })
        } else {
          setAuth(false)
          toast.error(parseRes, {
            position: toast.POSITION.TOP_CENTER
          })
        }

        

    } catch (err) {
        console.error(err.message)
    }
  }

  return (
   
      <div className="bg-gray-400 relative h-screen">
        <Header />
        <div className="mx-5 my-12 max-w-lg bg-white shadow-lg rounded-xl flex flex-col items-center md:mx-auto py-10">

        <h1 className="text-3xl mb-5">Login</h1>
          <p className="mb-5 px-10 max-w-sm">For at kunne bruge Mit Budget - skal du først været logget ind.</p>
        
        <form onSubmit={onSubmitForm}>
          <div className="bg-white flex flex-col">

            <div className="flex flex-inline">
             <div className="flex items-center pl-5"><AtSign color="grey" size={24}/></div>
              <input 
                type="email"
                name="email" 
                placeholder="Skriv din email"
                className="px-4 py-6 focus:outline-none"
                autoComplete="email"
                value={email}
                onChange={e => onChange(e)}>
              </input>
            </div>

            <div className="flex flex-inline">
             <div className="flex items-center pl-5"><Lock color="grey" size={24}/></div>
              <input 
                type="password"
                name="password" 
                placeholder="Skriv dit password"
                autoComplete="password"
                className="px-4 py-6 border border-l-0 border-b-0 border-r-0 focus:outline-none"
                value={password}
                onChange={e => onChange(e)}>
              </input>
            </div>

          </div>
          <div className="flex justify-center">
            <motion.button 
              whileHover={{x: 5}}
              className="btn flex">Login
            <LogIn className="ml-2" size={22}/>
            </motion.button>
          </div>

        </form>

        <div className="flex flex-col md:flex-row mt-5">
          <div >
            <Link to="/home" className="text-gray-400 hover:text-blue-450 hover:underline mr-10 flex">Tilbage til forside
             
            </Link>  
          </div>

            <div>
            <Link to="/register" className="text-gray-400 hover:text-blue-450 hover:underline flex mt-2 md:mt-0">Opret en bruger
             
            </Link>
          </div>
        </div>
       

        </div>
         <Footer/>
      </div>
     

  )
}

export default Login