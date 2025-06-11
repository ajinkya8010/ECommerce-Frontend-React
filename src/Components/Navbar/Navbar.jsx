import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo65.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  const{getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
      <a href="/" style={{textDecoration:'none'}}>
        <div className="nav-logo">
        <img src={logo} alt="" />
        <p>BUY5</p>
      </div>
      </a> 
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}}  to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}}  to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}  to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button onClick={()=>{setMenu("")}}>SignUp</button></Link>
        <Link to='/cart'><img onClick={()=>{setMenu("")}} src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar