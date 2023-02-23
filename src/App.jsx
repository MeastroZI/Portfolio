import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Components/Header'
import Home from './Home'
import Project from './Projects_section';
import Footer from './Components/Footer';
import Services from './Services';
import Contact from './Contact'
import GotoTop from './Components/GotoTop'



function App() {
  function HandleChange(){
    console.log("Router is change")
  }

  return (
    
    <BrowserRouter>
      <Header></Header>

      {/* <GotoTop></GotoTop> */}
      <GotoTop></GotoTop>

      <Home></Home>


                
                
                
      
      
      {/* <Footer></Footer> */}
    </BrowserRouter>
    
  )
}

export default App
