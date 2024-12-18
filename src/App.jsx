import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import GoogleSearchMeta from './GoogleSearchMeta'


const App=()=> {
  return (
   <>
    {/* <GoogleSearchMeta /> */}
   <Header />
   <Navbar />
   <About/>
   <Experience/>
   <Services/>
   <Portfolio/>
   <Contact/>
   <Footer/>

   
   </>
   
  )
}

export default App