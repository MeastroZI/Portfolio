import React from 'react'
import './Style/Project.css'
import Footer from './Components/Footer'
import elementObserver from './ElementObserver'
import { useRef,useEffect  } from 'react'

function Project() {

    
    // ************this is View Button Click effect ****************

    function handleClick(e) {
        // e.target.classList.toggle('previewActive')
        // const view = e.target.parentNode.querySelector('#View')

        // const AddClassV=view.classList.contains('ViewActive')?"ViewDeActive":"ViewActive"

        // view.classList.add(AddClassV);
        // view.classList.remove((AddClassV=='ViewActive')?"ViewDeActive":"ViewActive")


        // const github = e.target.parentNode.querySelector('#Github')

        // const AddClassG=github.classList.contains('GithubActive')?"GithubDeActive":"GithubActive"

        // github.classList.add(AddClassG);
        // github.classList.remove((AddClassG=='GithubActive')?"GithubDeActive":"GithubActive")


        //Effecency is also very imp , this the effectent code of upper one
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
    function handleHover(e){
        // console.log(e)
        document.querySelectorAll(".projects").forEach((elem)=>{
            DeActiveElm(elem)
        })
        
        e.target.classList.add(e.target.className+"Active")
    }
    //***************projects Leave(Unhover) Effect***********  */
    function handleMouseLeave(e) {
        DeActiveElm(e.target) //call the Deactive function which Deactive All the effect(ViewButton,view, & github effects) under the project on Unhover(leave)
    }
    /***************Deactive Function which Deactive all effect which are under the projects**************  */
    function DeActiveElm(elm){
        elm.classList.remove("projectsActive")
        elm.querySelector(".preview").classList.remove('previewActive')
        elm.querySelectorAll('.list').forEach((elm) => {
            elm.classList.remove(elm.id + "Active")
            elm.classList.add(elm.id + "DeActive")
        })
        elm.querySelectorAll('.Linktext').forEach((elm)=>{
            elm.classList.remove('LinktextActive')
        })
    }
    /***************This function Vissible the Text over the view and github icon on hover*************** */
    function handleTextView(e){
        
        e.target.parentNode.querySelector('.Linktext').classList.add('LinktextActive')
    }
    function handleTextRemove(e){
        e.target.parentNode.querySelector('.Linktext').classList.remove('LinktextActive')
    }
    


    return (
        <div style={{textAlign:"center"}} >
            <span className='Heading'>Projects</span>
            <span className="text">This is some few resent Projects of mine</span>
            <div className="PrContainer" id='Project'>
                <div className="projects"  index={1} onMouseLeave={handleMouseLeave} onMouseEnter={handleHover} >
                    <div className="preview" onClick={handleClick}>View</div>

                    <li className='list'id='View' >
                        <span className='Linktext'> Site</span>
                        <a href="#" onMouseEnter={handleTextView} onMouseLeave={handleTextRemove}><i className="fa-solid fa-eye"></i>
                        </a>

                    </li>
                    <li className='list' id='Github' >
                        <span className='Linktext'>Code</span>
                        <a href="#" onMouseEnter={handleTextView} onMouseLeave={handleTextRemove}><i className="fa-brands fa-github"></i>
                        </a>

                    </li>
                </div>
                <div className="projects" index={2} onMouseLeave={handleMouseLeave} onMouseEnter={handleHover} >
                    <div className="preview" onClick={handleClick}>View</div>

                    <li className='list'id='View' >
                        <span className='Linktext'> Site</span>
                        <a href="#" onMouseEnter={handleTextView} onMouseLeave={handleTextRemove}><i className="fa-solid fa-eye"></i>
                        </a>

                    </li>
                    <li className='list' id='Github' >
                        <span className='Linktext'>Code</span>
                        <a href="#" onMouseEnter={handleTextView} onMouseLeave={handleTextRemove}><i className="fa-brands fa-github"></i>
                        </a>

                    </li>
                </div>
                <div className="projects"  index={3} onMouseLeave={handleMouseLeave} onMouseEnter={handleHover}>
                    <div className="preview" onClick={handleClick}>View</div>

                    <li className='list'id='View' >
                        <span className='Linktext'> Site</span>
                        <a href="#" onMouseEnter={handleTextView} onMouseLeave={handleTextRemove}><i className="fa-solid fa-eye"></i>
                        </a>

                    </li>
                    <li className='list' id='Github' >
                        <span className='Linktext'>Code</span>
                        <a href="#" onMouseEnter={handleTextView} onMouseLeave={handleTextRemove}><i className="fa-brands fa-github"></i>
                        </a>

                    </li>
                </div>
                <div className="projects"  index={4} onMouseLeave={handleMouseLeave} onMouseEnter={handleHover}>
                    <div className="preview" onClick={handleClick}>View</div>

                    <li className='list'id='View' >
                        <span className='Linktext'> Site</span>
                        <a href="#" onMouseEnter={handleTextView} onMouseLeave={handleTextRemove}><i className="fa-solid fa-eye"></i>
                        </a>

                    </li>
                    <li className='list' id='Github' >
                        <span className='Linktext'>Code</span>
                        <a href="#" onMouseEnter={handleTextView} onMouseLeave={handleTextRemove}><i className="fa-brands fa-github"></i>
                        </a>

                    </li>
                </div>
                <div className="projects"  index={5} onMouseLeave={handleMouseLeave} onMouseEnter={handleHover}>
                    <div className="preview" onClick={handleClick}>View</div>

                    <li className='list'id='View' >
                        <span className='Linktext'> Site</span>
                        <a href="#" onMouseEnter={handleTextView} onMouseLeave={handleTextRemove}><i className="fa-solid fa-eye"></i>
                        </a>

                    </li>
                    <li className='list' id='Github' >
                        <span className='Linktext'>Code</span>
                        <a href="#" onMouseEnter={handleTextView} onMouseLeave={handleTextRemove}><i className="fa-brands fa-github"></i>
                        </a>

                    </li>
                </div>
                <div className="projects"  index={6} onMouseLeave={handleMouseLeave} onMouseEnter={handleHover}>
                    <div className="preview" onClick={handleClick}>View</div>

                    <li className='list'id='View' >
                        <span className='Linktext'> Site</span>
                        <a href="#" onMouseEnter={handleTextView} onMouseLeave={handleTextRemove}><i className="fa-solid fa-eye"></i>
                        </a>

                    </li>
                    <li className='list' id='Github' >
                        <span className='Linktext'>Code</span>
                        <a href="#" onMouseEnter={handleTextView} onMouseLeave={handleTextRemove}><i className="fa-brands fa-github"></i>
                        </a>

                    </li>
                </div>
                





            </div>

            

        </div>
    )
}

export default Project