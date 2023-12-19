import React, { useState } from 'react'
import "./Navbar.css"
import {useNavigate} from "react-router-dom"
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';

export default function Navbar() {

  // const [count, setCount] = useState(useSelector((state)=>state.CartFormation))
const count=useSelector((state)=>state.CartFormation);
  const navigate= useNavigate();

  function history(){

    navigate("/cart2")
  }
  function mainpage(){

    navigate("/")
  }

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <div>
      <div className='Navbar_1'>
      
<div className='Navbar_2'><img alt="logo" onClick={mainpage} src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" height={45} width={230}/></div>
  <div className='Navbar_21'>   

<div className='Navbar_211'> Sing-in</div>
<div className='Navbar_211'>Sing-up</div>
<div className='Navbar_211'>
{/* <button onClick={history}> */}
<IconButton   aria-label="cart" onClick={history}>
      <StyledBadge badgeContent={count.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
{/* <img src ="https://www.seekpng.com/png/detail/261-2611186_broadcast-mall-shopping-cart-comments-shopping-cart-icon.png" width={60} height={40} /> */}
{/* // </button> */}
</div>
</div>
      </div>
    </div>
  )
}
