import React ,{useState}from 'react'

function Elementvar() {
    const[isadmin,setIsadmin]=useState(false);
     let h      
        
            if(isadmin){
   
                h=<h3>Is admin</h3> 
            }
            else{
                
                h=<h3>Not a admin</h3>
                
            }
            return h;
}

export default Elementvar