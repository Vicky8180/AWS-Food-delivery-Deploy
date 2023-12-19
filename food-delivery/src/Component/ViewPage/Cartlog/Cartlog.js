import React, { useState } from 'react'
import "./Cartlog.css"

import {useNavigate} from "react-router-dom"

export default function Cartlog(props) {
 
    const navigate= useNavigate();
    const temp = props.gdata
    // const [Temp, setTemp] = useState(temp);
    // console.log(temp.foodcategory)
    const fulldata=props.fulldata
// var fulldataArray=[]
// fulldata.map(item=>{
//     if(item.foodcategory===temp.foodcategory){
//         fulldataArray.push(item)
//     }
// })
// console.log(fulldataArray)

     function Orderfunction(){
       navigate("/order", {state:{display:temp,fulldata:fulldata}})
     }
    return (

        <>
            <div className='Cartlog_1'>

                <div className='Cartlog_11'>

                    <img className="Cart_img" src={temp.foodimg} />


                </div>
                <div className='Cartlog_12'>

                    <div className='Cartlog_121'>
                        <h3 className='food_name'>{temp.foodname}</h3>
                        <div className='rating'><h3 className='rating_2'>4.5</h3></div>
                    </div>
                    <div className='Cartlog_122'>
                        <h3 className='foodprice'>${temp.foodprice}</h3>

                        <button className='order_btn' onClick={Orderfunction}>Order</button>
                    </div>



                </div>
            </div>
        </>
    )
}
