import React, { useState, useEffect } from 'react'

// Notifikationer
import { toast } from 'react-toastify'

// Icons 
import { LogOut } from 'react-feather'

// Animation
import { motion } from "framer-motion"

// Components 
import Header from './Header'
import { FooterDashboard } from './FooterDashboard'



const Dashboard = ({setAuth, isAuthenticated}) => {

  const [name, setName] = useState("")
  const [data, setData] = useState(null)

  async function getName(){
    try {
      const response = await fetch("http://localhost:5000/dashboard", {
        method: "GET",
        headers: {token: localStorage.token}
      })

      const parseRes = await response.json()

      setName(parseRes.user_name)

    } catch (err) {
        console.error(err.message)
    }
  }

  async function getData(){
    try {
      const response = await fetch("http://localhost:5000/data/data")
      
      const parseRes = await response.json()

      console.log(parseRes)

      setData(parseRes)
      
    } catch (err) {
      console.error(err.message)
    }
  }

  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    setAuth(false)
    toast.success("Du er logget ud!", {
      position: toast.POSITION.TOP_CENTER
    })
  }


  useEffect(() => {
    getName()
  }, [])

  return (
      <div className="relative h-screen">
      <Header isAuthenticated={isAuthenticated} logout={logout}/>
      {/* Top Section */}
        <div className="text-center mt-8 md:mt-16 flex-col">
          <h1 className="text-2xl">Hej {name}.</h1>
            <p className="py-5 text-lg">Få dit budget udfyldt herunder</p>
              
            
            <input type="checkbox" className="form-checkbox text-blue-450 h-6 w-6 mr-3"></input>
            <label className="text-sm "> Jeg giver samtykke til at hente mine data. </label>

            <motion.button 
              whileHover={{y: -5}}
              onClick={() => getData()} 
              className="flex btn mx-auto">
                Hent data
            </motion.button>
           
             <hr className="border mt-16 mx-8 lg:mx-32"/>
        </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 grid-row-10 justify-items-center mx-5 xl:mx-28 gap-5">
      
          <h2 className="section-header mt-8">Indtægter</h2>
      
          <div className="card">
            <div className="flex justify-center">
              <h3 className="card-header">Indtægter</h3>
            </div>

                <hr className="mb-5"/>
                  <div className="card-inner-grid">
                    <p>Løn</p>
                    <p className="text-yellow-400">{data === null ? "____" : data[0].salary + ' kr.'}</p>
                    <p>Offentlige ydelser</p>
                    <p className="text-yellow-400">____</p>
                  </div>
          </div>

        <h2 className="section-header">Faste udgifter</h2>

          <div className="card">
           <div className="flex justify-center">
              <h3 className="card-header">Bolig</h3>
            </div>
           
            <hr className="mb-5"/>
              <div className="card-inner-grid">
                <p>Husleje</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].rent + ' kr.'}</p>
                <p>Acconto</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].aconto + ' kr.'}</p>
                <p>El</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].el + ' kr.'}</p>
                <p>Veligeholdelse</p>
                <p className="text-yellow-400">____</p>
              </div>
          </div>

          <div className="card">
            <h3 className="card-header">Transport</h3>
            <hr className="mb-5"/>
              <div className="card-inner-grid">
                <p>Benzin</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].fuel + ' kr.'}</p>
                <p>Forsikringer</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].ensurance + ' kr.'}</p>
                <p>Offentlig transport</p>
                <p className="text-yellow-400">____</p>
                <p>Bil lån</p>
                <p className="text-yellow-400">____</p>
              </div>
          </div>

          <div className="card">
            <h3 className="card-header">Tv, internet & mobil</h3>
            <hr className="mb-5"/>
              <div className="card-inner-grid">
                <p>Tv abonnement</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].tv + ' kr.'}</p>
                <p>Internet</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].internet + ' kr.'}</p>
                <p>Licens</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].licens + ' kr.'}</p>
                <p>Streaming tjenester</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].streaming + ' kr.'}</p>
                <p>Mobil abonnement</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].mobile + ' kr.'}</p>
              </div>
          </div>

          <div className="card">
            <h3 className="card-header">Forsikringer</h3>
            <hr className="mb-5"/>
              <div className="card-inner-grid">
                <p>A-kasse</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].akasse + ' kr.'}</p>
                <p>Indboforsikring</p>
                <p className="text-yellow-400">____</p>
                <p>Fagforening</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].unions + ' kr.'}</p>
                <p>Andet</p>
                <p className="text-yellow-400">____</p>
              </div>
          </div>

          <div className="card">
            <h3 className="card-header">Øvrige faste</h3>
            <hr className="mb-5"/>
              <div className="card-inner-grid">
                <p>Medicin</p>
                <p className="text-yellow-400">____</p>
                <p>Abonnementer</p>
                <p className="text-yellow-400">____</p>
                <p>Fitness</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].fitness + ' kr.'}</p>
                <p>Andet</p>
                <p className="text-yellow-400">____</p>
              </div>
          </div>

          <h2 className="section-header">Variable udgifter</h2>

          <div className="card">
            <h3 className="card-header">Fornøjelser</h3>
            <hr className="mb-5"/>
              <div className="card-inner-grid">
                <p>Ferier</p>
                <p className="text-yellow-400">____</p>
                <p>Cafe & restaurant</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].cafe + ' kr.'}</p>
                <p>Fritidsudstyr</p>
                <p className="text-yellow-400">____</p>
                <p>Arrangementer</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].arrangement + ' kr.'}</p>
                <p>Biograf</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].bio + ' kr.'}</p>
              </div>
          </div>

          <div className="card">
            <h3 className="card-header">Husholdning</h3>
            <hr className="mb-5"/>
              <div className="card-inner-grid">
                <p>Supermarked</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].supermarket + ' kr.'}</p>
                <p>Take-away</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].takeaway + ' kr.'}</p>
                <p>Til boligen</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].housing + ' kr.'}</p>
              </div>
          </div>

          <div className="card">
            <h3 className="card-header">Tøj & personlig pleje</h3>
            <hr className="mb-5"/>
              <div className="card-inner-grid">
                <p>Tøj</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].clothes + ' kr.'}</p>
                <p>Sko</p>
                <p className="text-yellow-400">____</p>
                <p>Frisør</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].barber + ' kr.'}</p>
                <p>Kosmetik</p>
                <p className="text-yellow-400">____</p>
              </div>
          </div>

          <div className="card">
            <h3 className="card-header">Diverse</h3>
            <hr className="mb-5"/>
              <div className="card-inner-grid">
                <p>Indretning</p>
                <p className="text-yellow-400">____</p>
                <p>Haveudstyr</p>
                <p className="text-yellow-400">____</p>
                <p>Elektronik</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].electronic + ' kr.'}</p>
                <p>Gaver</p>
                <p className="text-yellow-400">{data === null ? "____" : data[0].gift + ' kr.'}</p>
              </div>
          </div>

      </div>

      <hr className="border mt-16 mx-8 lg:mx-32"/>

      {/* Bottom section */}

      <p className="px-8 mt-16 md:w-2/4 mx-auto">Nu har du mulighed for at gemme dit budget, så du kan logge ind på et senere tidspunkt og se dit budget så ofte du vil.</p>
      <div className="inline-flex w-full justify-evenly md:justify-center mb-12">
        
        <motion.button 
          whileHover={{y: -5}}
          className="btn md:mr-10 flex">
          Gem
        </motion.button>

        <motion.button 
          whileHover={{y: -5}}
          className="btn flex" 
          onClick={e => logout(e)}>Log ud
          <LogOut className="ml-2 mt-px" size={22}/>
        </motion.button>
      </div>

      <FooterDashboard/>
    </div>

  )
}

export default Dashboard