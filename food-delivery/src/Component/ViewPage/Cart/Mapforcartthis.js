import React, { useState } from "react";
import "./Cart.css";
import { useSelector} from "react-redux";

import Cart2 from "./Cart2";

export default function Mapforcartthis() {
  const gottendata = useSelector((state) => state.CartFormation);

  console.log(gottendata);
  console.log("gottendata");

  var [totalsum, settotalsum] = useState(0);

  function takingdatafromchild(data) {
    var tempu = totalsum + data;
    settotalsum(tempu);
  }

  var extra15off = (totalsum * 15) / 100;

  var orderdiscount = (totalsum * 2) / 100;
  var grandtotal =Math.round((totalsum - extra15off - orderdiscount) * 100) / 100;

    const checkoutalert=()=>{
        if(gottendata.length>0 && grandtotal>0){
            alert("Order Completed")
        }else {
            alert("Opps you do not have items!")
        }
       
    }
  return (
    <>
      <div className="cart_main">
        <div className="div_1">
          <h1>MY SHOPPING CART </h1>
        </div>

        <div className="div_2">
          <div className="div_2L">
            {gottendata.map((item) => (
              <Cart2 data={item} senddata={takingdatafromchild} />
            ))}
          </div>
          <div className="div_2R">
            <div className="div_payment1">Payment</div>
            <hr />
            <div className="div_payment2">
              <div>EXTRA 15% OFF</div>
              <div>-${extra15off}</div>
            </div>
            <div className="div_payment3">
              <div>SUBTOTAL</div>
              <div>${totalsum}</div>
            </div>
            <div className="div_payment3">
              <div>SHIPPING COST</div>
              <div>$0</div>
            </div>
            <div className="div_payment3">
              <div>ORDER DISCOUNT</div>
              <div>-${orderdiscount}</div>
            </div>
            <hr />
            <div className="div_payment6">
              <div>GRAND TOTAL</div>
              <div>${grandtotal}</div>
            </div>
            <button className="btn_checkout" onClick={checkoutalert}>CHECKOUT</button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
