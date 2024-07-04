import React from 'react'
import './Style/Project.css'
import Footer from './Components/Footer'
import { useRef, useEffect } from 'react'
import Proj1 from './img/myProj1.png'
import img from './img/myIMG.png'
import ProjectItem from './Components/ProjectItem'

function Project() {

    return (
        <div style={{ textAlign: "center" }} >
            <span className='Heading'>Projects</span>
            <span className="text">This is some few resent Projects of mine</span>
            <div className="PrContainer" id='Project'>
                <ProjectItem   
                Github='https://github.com/MeastroZI/ChatAPP'
                image='myProj1.png'
                description="This is a chat website that I have developed using Socket.io, Node.js, and React. Currently, the website does not have a database implemented, so all chats will be erased upon reloading the page , so your privacy is maintain 😆😆 "  />

                <ProjectItem
                Github='https://github.com/MeastroZI/UserManagementBackend'
                image='myProj2.png'
                description="Scalable backend with MVC architecture for user management, including proper testing using Jest"  />
            </div>



        </div>
    )
}

export default Project