
import { useRef,useEffect,useState } from 'react'
import  './Style/ContactStyle.css'
import elementObserver from './ElementObserver';
import Submite from './Submite_Form';


// import { reset } from 'nodemon';

function Contact(){

    const ConctRef = useRef(null)
    const FormVisiable = elementObserver(ConctRef)
    const [FormState,setFormState] = useState({name:"" ,number:"", Email:"",Message:"" })
    const inputsNodes = document.getElementsByClassName("FormText")
    
    function ErrorMsg(msg , succes){
        let message = document.getElementsByClassName("errorMsg")[0];
        // message.classList.add("errorMsg");
        message.style.backgroundColor= `${succes?"#148d44":"#8e0c0ccc"}`
        message.innerText=`${msg}`;
        message.style.transform="translateX(0px)"
        
        setTimeout(() => {
            message.style.transform="translateX(300px)"
            // message.remove()
        }, 3300);

        
    }

    const SubmiteHandler =(e)=>{
        e.preventDefault();
        
        // console.log(FormState.name==""|| FormState.Email=="" || FormState.Message == "")
        console.log(FormState.name)
        if (FormState.name==""|| FormState.Email=="" || FormState.Message == "") {

            ErrorMsg("Please fill the require filleds",false)
            
            return
        }
        const config={
            Username:"vinitsharma2480@gmail.com",
            Password:"B7D13C8D80F41A886A406DC006F6B9651D11",
            
            Host:"smtp.elasticemail.com",
            Port:"2525",
            // To : 'fresharlence@gmail.com',
            To : "fresharlence@gmail.com",
            // From : "vinitsharma2480@gmail.com",
            From : "vinitsharma2480@gmail.com",
            Subject : `This email is from ${FormState.Email}`,
            Body : `Name :      ${FormState.name}
                    Mobile No : ${FormState.number}\n
                    Email : ${FormState.Email}
                    Body : ${FormState.Message}\n`
            
        };
        
        window.Email.send(config).then(message=> {
            ErrorMsg("Your Email sent successfully THANK YOU!" , true)
        })        
        
        
        setFormState({name:"" ,number:"", Email:"",Message:"" })
    
    }

    const ChangerHandler = (e)=>{
        setFormState({...FormState,[e.target.name]:e.target.value})
        
    }

   

    useEffect(()=>{
        const Inputs = ConctRef.current.querySelectorAll('.Lis')
        const Btn = document.getElementById('Submit')
        
        if (FormVisiable) {
            Inputs.forEach((e)=>{
                e.classList.remove('popUpEffect')
            })
            // Btn.classList.add('BtnSlide')
        }

        return()=>{
            Inputs.forEach((e)=>{
                e.classList.add('popUpEffect')
            })
            // Btn.classList.remove('BtnSlide')
        }
    },[FormVisiable])

    return(
        <div className="Container" id='ContactPage'>

            <form className="formCont" ref={ConctRef} onSubmit={SubmiteHandler} >
                <ul >

                    <li className="heading ">
                        <span >Contact Me</span>
                    </li>
                    <li className='ContactText'>
                        <span >I am intreseted in freelance work opportunities.If you have some efforts for me than don't hesitate to use the form LET's TALK !  </span>
                    </li>

                    <li id='name'   className='Lis popUpEffect' >
                        <input type="text" name='name' className="FormText "  placeholder="Name" onChange={ChangerHandler}
                        value={FormState.name} />
                        
                    </li>

                    <li id='Number' className='Lis popUpEffect'>
                        <input type="tel" name='number' className="FormText "  placeholder="Phone no (*Optional)" onChange={ChangerHandler}
                        value={FormState.number}/>

                    </li>

                    <li id='Email' className='Lis popUpEffect'>

                        <input type="email" 
                        name='Email' className="FormText "  placeholder="Email" onChange={ChangerHandler}
                        value={FormState.Email} />
                    </li>

                    

                    <li id="Message"    className='Lis popUpEffect' >
                        <textarea name="Message"  className='FormText ' cols="30" placeholder='Message' rows="30" 
                        onChange={ChangerHandler}
                        value={FormState.Message} ></textarea>

                    </li>
                    
                    <li id='Submit' type="Submit" >

                        <button >Send message</button>
                    </li>

                    <li className="follow_me">

                        <a href="https://www.linkedin.com/in/vinit-sharma-94110123a/" target={"_blank"}>
                            <i class="fa-brands fa-linkedin"></i>
                        </a>

                        <a href="https://github.com/MeastroZI" target={"_blank"}>
                            <i class="fa-brands fa-github"></i>
                        </a>

                        <a href="https://www.instagram.com/vinit____sharma/" target={"_blank"}>
                            <i class="fa-brands fa-instagram"></i>
                        </a>

                      
                        
                    </li>

                </ul>
            </form>
            
            
            <div className="errorMsg">

            </div>
                    

        </div>
    )
}


export default Contact 