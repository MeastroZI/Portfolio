import React, { version } from 'react'
// import '../Style/"Navbar.css'
import '../Style/Navbar.css'
// import Navlink from './Navbar'
import { useEffect, useState } from "react";
// import e from 'express';

function Header() {
    
    const [ShowHembar,setShowHembar]=useState(true)
    const HandleClick = (e)=>{
        
        setShowHembar(!ShowHembar)
        if (ShowHembar) {
            
            e.target.classList.add("HembarRotate90deg")
            document.getElementsByClassName("NavList")[0].classList.add("NavbarVisiable") 
            document.body.style.overflowY='hidden';
        }
        else{
            e.target.classList.remove("HembarRotate90deg")
            document.getElementsByClassName("NavList")[0].classList.remove("NavbarVisiable") 
            document.body.style.overflowY='visible';
            
        }
        
        
    }
    const handleLinksClick=(e)=>{
        setShowHembar(true)
        document.getElementsByClassName('Hembarger')[0].classList.remove("HembarRotate90deg")
        
        document.getElementsByClassName("NavList")[0].classList.remove("NavbarVisiable")

        document.body.style.overflowY='visible';
    }
    
   

    
    
    return (
        
        <header className="NavContainer">

            
            <span className="logo">V</span>
            
            <div className="NavList">
                <li>
                    
                    <a href="#Home"  className="Links" onClick={handleLinksClick}>Home</a>
                    
                </li>
                <li>
                    
                    <a href="#Project"  className="Links" onClick={handleLinksClick}>Projects</a>
                </li>
                <li>
                    
                    <a href="#About"  className="Links" onClick={handleLinksClick}>About</a>
                </li>
                <li>
                    
                    <a href="#ContactPage"  className="Links" onClick={handleLinksClick}>Contact</a>
                </li>

            </div>

            
                
            <i class="fa-solid fa-bars test Hembarger" onClick={HandleClick}></i>
            

            
            

        </header>

    )
}

export default Header;