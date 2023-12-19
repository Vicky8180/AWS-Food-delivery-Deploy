import axios from 'axios';
import React, { useState } from 'react'
const intialstate1=[]
export default function Searching(state=intialstate1,action) {
    // const [just,setjus]= useState()
    // const tempsearch=async ()=>{

    //         const fetcheddata=(await axios.get('http://localhost:5000/api/getdetails')).data
    //         state(fetcheddata.response);
       
         
    //   } 
    //   tempsearch()

    switch(action.type){
        case "SEARCH":
            
            const inputgot=action.payload;
            const searchinput=inputgot.tempinput;
            const APIfetch= inputgot.data;
     const newData=[];
       APIfetch.map(item=>{
        if( item.foodname.toLowerCase().includes(searchinput.toLowerCase())){
           newData.push(item);
        }
   })
         return newData

         case "SEARCH3":
            
        const inputgot2=action.payload
            const searchinput2=inputgot2;
        
     
     
         return searchinput2
   
    default: return state

    }
    


}
