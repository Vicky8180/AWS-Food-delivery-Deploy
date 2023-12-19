import React, { useState } from 'react'
import Suggestion from './Suggestion'
import "../Order/Order.css"

export default function Mapforsuggestion(props) {
    const[tempfdata,settempfdata]=useState(props.fulldata);

  return (
<>
<div  className='order_31'><div className='order_text'>YOU MAKE ALSO LIKE</div> </div>
<div className='order_32'>
<div className='fcsize'>

{tempfdata.map(item=>(
<Suggestion temp2data={item}/>
)
)}
</div>
</div>
    
</>
  )
}
