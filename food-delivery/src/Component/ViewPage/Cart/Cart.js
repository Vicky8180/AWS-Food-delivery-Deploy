// import React,{useEffect, useState} from 'react'
// import "./Cart.css"
// import { useSelector } from 'react-redux';




// export default function Cart() {
//   const gottendata= useSelector((state)=>state.CartFormation)
//     const[quantity,setquantity]= useState(0);

//     var [totalsum, settotalsum]=useState(0);
   

//   function quantitysettingplus(props){
    
//     settotalsum(totalsum+props)
//     console.log(totalsum)

//     setquantity(quantity+1);
//   }


  
//   function quantitysettingminus(props){
//     if(quantity>1){
//       // totalsum= totalsum-quantity*props
//       settotalsum(totalsum-props)
//     setquantity(quantity-1);}
//   }
  

//    var extra15off= ((totalsum*15)/100)

//     var orderdiscount= ((totalsum*2)/100)
//    var  grandtotal= Math.round((totalsum-extra15off-orderdiscount)*100)/100
    
 



//   return (
//     <>
// <div className='cart_main'>

// <div className='div_1'>
//     <h1>MY SHOPPING CART </h1>
// </div>


// <div className='div_2'>
// <div className='div_2L'>
// {gottendata.map(item=>
//   <div className='div_21'>
// <div  className='cart_img'><img   className='mk' src={item.foodimg} alt="Not found"/>
// </div>
// <div className='cart_right'>
//     <div className='h1_foodname'>{item.foodname}</div>
//     <div className='h1_foodcategory'>{item.foodcategory}</div>
//     <div className='div_quantity'><button onClick={()=>{quantitysettingminus(item.foodprice)}}>-</button><div>{quantity}</div><button   onClick={()=>{quantitysettingplus(item.foodprice)}}>+</button></div>

//     <div className='div_cancel'>    <h3 className='h1_foodprice'>${item.foodprice}</h3>
//     <button className='btn_cancel'>Cancel logo</button>
//     </div>
// </div>
// </div>

// )}
// {/* <div className='div_21'>
// <div  className='cart_img'><img   className='mk' src="https://www.pakladies.com/wp-content/uploads/2013/05/Sindhi-Biryani-Recipe-Pakis.jpg" alt="Not found"/>
// </div>
// <div className='cart_right'>
//     <div className='h1_foodname'>Biryani hydrabadi</div>
//     <div className='h1_foodcategory'>Biryani</div>
//     <div className='div_quantity'><button onClick={quantitysettingminus}>-</button><div>{quantity}</div><button   onClick={quantitysettingplus}>+</button></div>

//     <div className='div_cancel'>    <h3 className='h1_foodprice'>$19,500</h3>
//     <button className='btn_cancel'>Cancel logo</button>
//     </div>
// </div>
// </div> */}




// </div>
// <div className='div_2R'>
// <div className='div_payment1'>Payment</div>
// <hr/>
// <div  className='div_payment2'> 
// <div>EXTRA 15% OFF</div>
// <div>-${extra15off}</div>


// </div>
// <div  className='div_payment3'> 
// <div>SUBTOTAL</div>
// <div>${totalsum}</div>


// </div>
// <div  className='div_payment3'> 
// <div>SHIPPING COST</div>
// <div>$0</div>


// </div>
// <div  className='div_payment3'> 
// <div>ORDER DISCOUNT</div>
// <div>-${orderdiscount}</div>


// </div>
// <hr/>
// <div  className='div_payment6'> 
// <div>GRAND TOTAL</div>
// <div>${grandtotal}</div>


// </div>
// <button className='btn_checkout'>CHECKOUT</button>


// </div>
// </div>

// </div>  </>
//   )
// }
