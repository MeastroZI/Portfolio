import React from 'react';
import "./Style/AboutStyle.css";

import elementObserver from './ElementObserver';
// import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import img from './img/myIMG.png'



function About() {
    const SklRef = useRef(null)

    const SklVisiable = elementObserver(SklRef)


    // const TxtVisiable = elementObserver()

    useEffect(() => {
        const SklLogos = SklRef.current.querySelectorAll('.AboutSkills')
        const AbtTxt = document.getElementsByClassName('AbtText')[0];
        if (SklVisiable) {
            SklLogos.forEach((e) => {
                e.classList.remove('InVisiable')
            })

            AbtTxt.classList.add('Visiable')

        }
        return () => {
            SklLogos.forEach((e) => {
                e.classList.add('InVisiable')
            })
            AbtTxt.classList.remove('Visiable')
        }
    }, [SklVisiable])

    return (

        <div className="AboutContainer" id='About' >
            <div className='Before_Design' id='AboutB'>ABOUT</div>
            <div className='Before_Design' id='MeB'>ME</div>


            <span className='AboutHeading'>About Me</span>
            <div className="BoxContainer" ref={SklRef}>
                <div className="aboutText" >

                    <span className="text AbtText"  >
                        {/* <img src={img} alt="" /> */}
                        Hello, I'm Vinit Sharma and I'm a self-taught full stack developer. I am passionate about learning new technologies of the computer world to make the internet world more beautiful.  Currently I am the Computer science student in Parul university Vadodara Gujarat. I spend the majority of my remaining time  in VS-Code , searching queries on google reading documentation  or watching videos on youtube
                    </span>


                </div>



                <div className="Skilleffect" >
                    <h1>Skills</h1>
                    <div className="effectContainer" >

                        <i class="fa-solid fa-brain center"></i>

                        <li className='AboutSkills  html InVisiable' ><i className="fa-brands fa-html5" ></i> </li>

                        <li className='AboutSkills  css InVisiable'><i className="fa-brands fa-css3-alt"></i></li>

                        <li className='AboutSkills  js InVisiable'><i className="fa-brands fa-js" ></i></li>

                        <li className='AboutSkills  react InVisiable'><i className="fa-brands fa-react "></i></li>

                        <li className='AboutSkills  node InVisiable'><i className="fa-brands fa-node-js "></i></li>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default About;