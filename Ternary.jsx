import React, { useState } from 'react'

function Ternary() {
    const[isadmin,setIsadmin]=useState(ture)

  return (
    <div>
        {isadmin?<h1>hello</h1>:<h1>welcome</h1>}
        <button onClick={()=>{(!isadmin)}}>Click</button>
    </div>
  )
}

export default Ternary