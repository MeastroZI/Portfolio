import React from 'react'
import '../Style/Project.css'


export default function ProjectItem({ description , View , Github , image}) {
    function handleClick(e) {
        e.target.classList.toggle('previewActive')
        const list = e.target.parentNode.querySelectorAll('.list')
        list.forEach((elm) => {
            const AddClass = elm.classList.contains(elm.id + 'Active') ? elm.id + "DeActive" : elm.id + "Active";

            elm.classList.add(AddClass);//This will make view and github icon visiable with effect

            elm.classList.remove((AddClass == elm.id + 'Active') ? elm.id + "DeActive" : elm.id + "Active");
            //This will  remove the active class and add the deactive class for reverse effect in view and github active
        })
    }

    //****************Projects Hover Effect***************** */
    function handleHover(e) {
        // console.log(e.currentTarget)
        // console.log(e.currentTarget.querySelector('.ProjectsImg'))
        document.querySelectorAll(".Projects").forEach((elem) => {
            DeActiveElm(elem)
        })

        e.currentTarget.querySelector(".ProjectsImg").classList.add("projectsActive")
        e.currentTarget.querySelector(".AboutProject").classList.remove("FlipBackward")
        e.currentTarget.querySelector(".AboutProject").classList.add("FlipForward")
    }
    //***************projects Leave(Unhover) Effect***********  */
    function handleMouseLeave(e) {
        // console.log(e.target.parentNode)
        e.currentTarget.querySelector(".AboutProject").classList.add("FlipBackward")
        e.currentTarget.querySelector(".AboutProject").classList.remove("FlipForward")

        DeActiveElm(e.currentTarget) //call the Deactive function which Deactive All the effect(ViewButton,view, & github effects) under the project on Unhover(leave)
    }
    /***************Deactive Function which Deactive all effect which are under the projects**************  */
    function DeActiveElm(elm) {
        elm.querySelector(".ProjectsImg").classList.remove("projectsActive")
        elm.querySelector(".preview").classList.remove('previewActive')
        elm.querySelectorAll('.list').forEach((elm) => {
            elm.classList.remove(elm.id + "Active")
            elm.classList.add(elm.id + "DeActive")
        })
        elm.querySelectorAll('.Linktext').forEach((elm) => {
            elm.classList.remove('LinktextActive')
        })
    }
    /***************This function Vissible the Text over the view and github icon on hover*************** */
    function handleTextView(e) {

        e.target.parentNode.querySelector('.Linktext').classList.add('LinktextActive')
    }
    function handleTextRemove(e) {
        e.target.parentNode.querySelector('.Linktext').classList.remove('LinktextActive')
    }
    return (
        <div className="projects"  onMouseLeave={handleMouseLeave} onMouseEnter={handleHover} >

            <div className="AboutProject">
                <p className='AboutProjectText'>
                    {description}
                </p>
            </div>
            <img src={'src/img/'+image} className='ProjectsImg'  alt="" />
            <div className="preview" onClick={handleClick}>View</div>

            <li className='list' id='View' >
                <span className='Linktext'> Site</span>
                <a href={View?View:"#" } onMouseEnter={handleTextView} onMouseLeave={handleTextRemove} target="_blank"><i className="fa-solid fa-eye"></i>
                </a>

            </li>
            <li className='list' id='Github' >
                <span className='Linktext'>Code</span>
                <a href={Github?Github:"#"} onMouseEnter={handleTextView} onMouseLeave={handleTextRemove} target="_blank"><i className="fa-brands fa-github"></i>
                </a>

            </li>
        </div>
    )
}
