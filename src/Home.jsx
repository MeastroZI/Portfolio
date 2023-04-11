import React from 'react'
import styled from "styled-components";
import Effect from './Components/Effect';
import  './Style/Home.css';
// import Typewriter from 'typewriter-effect/dist/core';
import TypeWriterEffect from 'typewriter-effect';
import project from './Projects_section';
import Project from './Projects_section';
import Contact from './Contact';
import About from './About';
import Footer from './Components/Footer';
import { useEffect, useRef ,useState,useMemo} from 'react';
import elementObserver from './ElementObserver';
import GotoTop from './Components/GotoTop';



function Home(){
 
    const TexCont = useRef(null)
    

    
    // console.log(head1.current)
    
    let visibility = elementObserver(TexCont)
    
    useEffect(()=>{

        const text = TexCont.current.querySelectorAll('.Text')
       
        // console.log(head1)
        
        if(visibility)
        {
            text.forEach((e)=>{
                e.classList.add('Visiable')

            })
            
        }

        return()=>{
            text.forEach((e)=>{
                e.classList.remove('Visiable')

            })
            
        }
    },[visibility])
    
    

    
   
    
    
    return(
        
        <div id='Home' >
        
            <div style={{backgroundColor:"rgba(255, 255, 255, 0.5)",
            width:100+"%",
            height:550+"px",
            textAlign:'center',
            position:"relative"
            
        }}>
          
                <div className='TextContainer' ref={TexCont} >
                    <p className='Text Text1' >
                        Hii This is me
                    </p>
                    <p className='Text Name' >
                        {/* <i className="fa-brands fa-maxcdn Logo" style={{color:"#009aff"}}></i>aestro zi */}
                        <div className="Logo">V</div>init
                        
                    </p>
                    <p className='Text Skills' >
                        <TypeWriterEffect options={{
                            autoStart:true,
                            loop:true,
                            delay:45,
                            strings:[
                                "I am  fronthand developer",
                                "& I will make your dream website real !",
                            ]
                        }}
                        
                        />

                    
                        
                    </p>

                </div>
                <Effect></Effect>
            </div>
            
            <Project></Project>
            <About></About>
            <Contact></Contact>
            
            
        </div>   
            
    )
}


export default Home;