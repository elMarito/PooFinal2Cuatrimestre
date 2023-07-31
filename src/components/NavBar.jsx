import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { appContext } from '../context/appContext';
import '../styles/navbar.css';

import mercadoLogo from '/logo-no-background.svg'
import Search from './Search'
import { User } from './User'
// import mercadoLogo from '/logo-black.svg'
// import mercadoLogo from '/logo-color.svg'
// import mercadoLogo from '/logo-white.svg'

const NavBar = () => {
  const { cache, setCache } = useContext(appContext);
  // const cart = cache.cart;
  // console.log("navbar",cache.cart.length,cache);
  return (
    <nav>
      <Link to="/">
        <img src={mercadoLogo} className="logo" alt="Mercado Trucho" />
        {/* <div id='logo'>
        <a href="#" target="_blank">            </a>
          </div> */}
      </Link>
      <Search />
      <Link to="/Cart">
        <div className="cart-container">
          <span className="shopping-cart">🛒</span>
          <span className="cart-badge">{cache.cart.length}</span>
        </div>
        {/* <div className="cart-btn">
        <p>Productos del carrito
          <i id="cart" className="fas fa-shopping-cart"></i>
          <span className="cart-quantity">:{cache.cart.length}🛒</span>
        </p>
      </div> */}
      </Link>
        {/* <User /> */}
      {/* <ul className="list-inline">
          <li><a href="#" className="search"><i className="fa fa-search"></i></a></li>
          <li><a href="#" className="account">Login</a></li>
          <li><button className="your-cart js-toggle-cart" data-item-num="3">Your Cart <i className="fa fa-lg fa-shopping-cart"></i></button></li>
        </ul> */}
    </nav>
  )
}

export default NavBar