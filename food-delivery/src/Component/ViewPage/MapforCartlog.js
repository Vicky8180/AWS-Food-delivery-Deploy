import React, { useEffect, useState } from 'react'
import Cartlog from './Cartlog/Cartlog';
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import { Search3 } from '../../action';


import "./MapforCart.css"
import "../ViewPage/Display/DisplayArea.css"
import { useLocation } from 'react-router-dom';

export default function MapforCartlog() {

  const [data, setData] = useState([]);
  const location = useLocation()
  const dispatch=useDispatch();
  const selector = useSelector((state) => state.Searching);
  const newdatacome = selector
console.log(newdatacome)
  useEffect(() => {
    const temp = async () => {
      try {
        const fetcheddata = (await axios.get('http://localhost:5000/api/getdetails')).data
        setData(fetcheddata.response);
      } catch (error) {
        console.log(error)
      }

    }
    temp()

  }, [])




  useEffect(() => {
    if ((location.state) != null) {
      setData((location.state))
      dispatch(Search3(data))
    }
  })

  console.log(data)

  return (
    <>
      {/* <Navbar/> */}

      <div className='Display_1'>
        <div className='Display_11'> <h1>Order food online in Lovely Professional University,Phagwara</h1></div>
        <div className='Display_11'>
          <div className='Map_1'>
        
            {newdatacome.map(item =>
              <Cartlog key={item._id} gdata={item} fulldata={data} />
            )}

           {/* { (newdatacome.length===0)?
            data.map(item =>
              <Cartlog key={item._id} gdata={item} fulldata={data} />
            ):
              newdatacome.map(item =>
              <Cartlog key={item._id} gdata={item} fulldata={data} />
            )
            
           } */}
          </div>
        </div>
      </div>

    </>
  )
}
