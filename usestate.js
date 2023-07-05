import React, { useState } from 'react'

export default function Counter() {
const [Fnum, setFnum] = useState(0);

    return (
        <div>
            {Fnum}
            <button onClick={() => { setFnum(Fnum + 1) }}>Increment</button>
            <button onClick={() => { setFnum(Fnum - 1) }}>Decrement</button>
            <button onClick={()=>{setFnum(0)}}>Reset</button>
        </div> 
  )
}
