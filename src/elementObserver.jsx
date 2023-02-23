import { useEffect, useRef ,useState,useMemo} from 'react';

const elementObserver=(Target)=> {
    // console.log(Target.current)
    
    const [isVisible,setVisibe]=useState(false)
    
    const options = useMemo(()=>{
        return{
            root:null,
            rootMargin:'0px',
            threshold:0.3
        }
    },[]);
  
    
    // const options ={
    //     root:null,
    //     rootMargin:'0px',
    //     threshold:1
    // }
    
    const callback = (entries)=>{
       

        entries.forEach((entry)=>{
            
            setVisibe(entry.isIntersecting);
            
            
        })
    }

    useEffect(()=>{
        const observer =  new IntersectionObserver(callback,options);
        
        if (Target.current) {
           
            observer.observe(Target.current);
        }
        
       
        return ()=>{
            if(Target.current){
                
                observer.unobserve(Target.current);
            }
        }
    },[Target.current])

   return isVisible


    
}



export default elementObserver