import React from 'react'
import "../Order/Order.css"
import { useSelector,useDispatch } from 'react-redux';
import { AddtoCart,RemovetoCart } from '../../../action';



export default function Suggestion(props) {
    // console.log(props.temp2data)


    // const gottendata= useSelector((state)=>state.CartFormation)
const dispatch= useDispatch();
  return (
    <>
 
        {/* <div  className='order_31'>You may also like </div> */}
        {/* <div className='order_32'> */}
        {/* <div className='fcsize'> */}
        <div className='order_321'>
       <div className='img_order321'>
       <img  className='img_order3211' src={props.temp2data.foodimg} />
        </div>
       <div className='order_321_text1'>{props.temp2data.foodname}</div>
       <div className='order_321_text2'>${props.temp2data.foodprice}</div>
       <button className='order_321_btn' onClick={()=>{dispatch(AddtoCart(props.temp2data))
       alert("added")
       }}>Add Cart</button>

        </div>

        {/* </div> */}


        {/* </div> */}
        
         

    </>
  )
}
