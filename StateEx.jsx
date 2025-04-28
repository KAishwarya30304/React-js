import React, { useState } from 'react'

function StateEx() {
    const[count,setCount]=useState(0)
    const handleClick=()=>{
        setCount(count+1)
    }
  return (
    <div>
        
        <button onClick={handleClick}>{count} Click</button>
    </div>
  )
}

export default StateEx