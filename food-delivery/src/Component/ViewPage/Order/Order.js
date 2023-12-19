import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Mapforsuggestion from '../suggestion/Mapforsuggestion';
import "./Order.css"
import { useSelector,useDispatch } from 'react-redux';
import { AddtoCart,RemovetoCart } from '../../../action';








// THIS FILE WOKING BUT FOR SOME ISSUE I BREAKED IT INTO TWO PART 
// MAPFORCARTTHIS AND CART2....BUT YOU CAN TAKE REFEREVNCE FROM
// HERE








export default function Order() {

const gottendata= useSelector((state)=>state.CartFormation)
const dispatch= useDispatch();

// console.log(gottendata)
const location= useLocation();

const display =location.state.display;
const fulldata=location.state.fulldata
// console.log(fulldata)


 var fulldataArray=[]
fulldata.map(item=>{
    if(item.foodcategory===display.foodcategory){
        fulldataArray.push(item)
    }
})

console.log(fulldataArray)

    const[quantity,setquantity]= useState(1);

    function quantitysettingplus(){
      setquantity(quantity+1);
    }
    
    function quantitysettingminus(){
      if(quantity>1){
      setquantity(quantity-1);}
    }
    var [tempprice,settempprice]= useState();
const[tprice, settprice]=useState(0.0);
    function totalprice(){
      tempprice=(((display.foodprice)*85)/100)+18.8
      settempprice(quantity*((display.foodprice)*15)/100)
        settprice(quantity*tempprice)
    }

    useEffect(()=>{
      totalprice();

    })




  const hitting_endpoint = async (event) => {
    event.preventDefault();
     await fetch("http://localhost:5000/api/orderpost", {
      method: "post",
      headers: {

        'Content-Type':'application/json'
      },
      body:JSON.stringify({

        foodname:"anoop",
        foodprice:1000,
        foodcategory:"bh",
        foodrating:4.5,
        foodimg:"frjfnrnfvnifnvjr",
        fooddiscription:"rfhrhr",
        username:"vicky yadav",
        userphone:64737348483,
        useremail:"vayadav99x1@gmail.com",
        quantity:quantity,
        tprice:tprice,

      

       
      })
    })

  
    alert("Order succecfully")

  
  }









  return (
    <>

       <div className='Order_main'>
    
<div className='Order_main_2'>
       <div className='Order_1'>
       <img className='order_img' src={display.foodimg} alt ="Not found"/>
    
            <div className='fname2'>
              <div>{display.foodname}</div>
              <div className='leftrating'>{display.foodrating}</div>
            </div>   
            <div className='div_quantity2'><button onClick={quantitysettingminus}>-</button><div>{quantity}</div><button   onClick={quantitysettingplus}>+</button></div>
            {/* <button className='btn_addtocart' onClick={()=>dispatch(RemovetoCart("Ambur biryani"))}>remove to cart</button> */}
            <button className='btn_addtocart' onClick={()=>dispatch(AddtoCart(display))}>Add to cart</button>

            

        </div>
        
       <div className='Order_2'>
       <div className='payment_2'>Payment</div>
     <hr/>
     <div className='div_fname'>
{display.foodname}

     </div>
     <div className='fcategory'>
      <div>Category</div>
      <div>{display.foodcategory}</div>
     </div>
       <div className='div_rating'>
        <div>Rating</div>
        <div>{display.foodrating}</div>
       </div>
      
      <div className='quan'>
        <div>
          Quantity
        </div>
        <div>{quantity}</div>
      </div>
          
         
        <hr/>
        <div className='div_price'>

        <div>Price</div>
        <div> ${display.foodprice}</div>
        </div>
        <div className='div_discount'>

<div>Discount 15% </div>
<div> -${tempprice}</div>
</div>
 <div className='div_shipping'>

<div>Shipping cost</div>
<div> $18.8</div>
</div>
          
          <hr/>
          <div className='div_total2'>

<div>Total price</div>
<div> ${tprice}</div>
</div>


          <hr/>
          <button className='btn_order2' onClick={hitting_endpoint}>Order Now</button>


        </div>
        </div>
         <div className='Order_main_3'> <Mapforsuggestion fulldata={fulldataArray}/>  </div>

        {/* <div className='Order_main_3'>
        <div  className='order_31'>You may also like </div>
        <div className='order_32'>
        <div className='fcsize'>
        <div className='order_321'>
       <div className='img_order321'>image </div>
       <div>name</div>
       <div>price</div>

        </div>
<div className='order_321'></div>
<div className='order_321'></div>
<div className='order_321'></div>
<div className='order_321'></div>
        </div>


        </div>
        
         </div> */}
       </div>
       
    </>
  )
}
