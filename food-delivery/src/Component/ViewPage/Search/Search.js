import React, { useState, useEffect } from 'react'
import "./Search.css"
import { useDispatch } from 'react-redux';
import {Search2} from "../../../action"
import axios from 'axios';


export default function Search() {

var [input, setinput]=useState();

  const [data, setData] = useState([]) 
    useEffect(()=>{
 const tempsearch=async ()=>{
    try {
        const fetcheddata=(await axios.get(`${process.env.REACT_APP_API_URL}/api/getdetails`)).data
        setData(fetcheddata.response);
    } catch (error) {
        console.log(error)
    }
     
  } 
  tempsearch()

},[])


const dispatch=useDispatch();
function valueTaking(e){
var tempinput= e.target.value;
setinput(tempinput);

var objectTemp={tempinput,data}
dispatch(Search2(objectTemp))

}

// console.log(input)
  return (
    <>
        <div className='search_main'>

            <div className='search-field'>
                {/* <form> */}
<input className='input_search' placeholder='Search' value={input} onChange={valueTaking}></input>
                {/* </form> */}
            </div>
            {/* <div className='search-field2'>
                <button>
                    search
                </button>
            </div> */}
            
        </div>
    </>
  )
}
