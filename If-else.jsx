import React, { useState } from 'react'

function Condition() {
    const[isadmin,setIsadmin]=useState(false);
 
  
    
        if(isadmin){
           return(
            <>
            <h3>Is admin</h3> 
            </>

           )
        }
        else{
            return(
            <h3>Not a admin</h3>
            )
        }
    
  
}

export default Condition