import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const[menu,setMenu] = useState("shop");
    
  return (
    <div className='navbar'>
    <div className= "nav-logo">
            <img src={logo} alt=" "/>
            <p> Shopper</p>
    </div>
        <ul className ="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to ='/'>Shop</Link>{menu ==="shop"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to ='/Men'>Men</Link>{menu ==="mens"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to ='/Women'>Women</Link>{menu ==="womens"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to ='/Kids'>Kids</Link>{menu ==="kids"? <hr/>:<></>}</li>
            <div className="nav-login-cart">
              <Link to ='/login'> <button>Login</button></Link>  
              <Link to='/cart'><img src={cart_icon} alt=""/> </Link>  
                <div className="nav-cart-count">0</div>
            </div>
        </ul>
    </div>
  )
}

export default Navbar

