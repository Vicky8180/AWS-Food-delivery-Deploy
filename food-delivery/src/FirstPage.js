import React from 'react'
import "./index.css"
import Filtter from './Component/ViewPage/Filtter/Filtter';
import MapforCartlog from './Component/ViewPage/MapforCartlog';
import Search from './Component/ViewPage/Search/Search';

export default function FirstPage() {
  return (
    <div  className='MAIN_Page'>
      <Search/>
      <Filtter/>
      {/* <DisplayArea/> */}
      <MapforCartlog/>
    </div>
  )
}
