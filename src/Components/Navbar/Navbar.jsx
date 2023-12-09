import './navbar.css'
import UserImg from './Images/user.svg'
import SearchImg from './Images/search.svg'
import CartImg from './Images/shopping-cart.svg'
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <div className={`container ${isOpen ? 'open' : ''}`}>
          <div id="menu-icon" onClick={toggleMenu}>
            <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
            <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
            <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
          </div>
          <div className={`menu ${isOpen ? 'open' : ''}`}>
            <p className="navbar-right-links">Home</p>
            <p className="navbar-right-links">About Us</p>
            <p className="navbar-right-links">Contact</p>
          </div>
        </div>
        <p className="navbar-left-title">Livestock</p>
      </div>
      <div className="navbar-mid">
        <input className='navbar-mid-search-bar' type="text" placeholder='Search for Animals' />
        <button className="search-btn"><img src={SearchImg} alt="" /></button>
      </div>
      <div className="navbar-right">
        <button className='navbar-right-buy-btn outlined-btn'>Buy</button>
        <button className='navbar-right-sell-btn filled-btn'>Sell</button>
        <button className='user-btn'><img className='user-img' src={UserImg} alt="" /></button>
        <button className='user-btn'><img className='cart-img' src={CartImg} alt="" /></button>
      </div>
    </div>
  )
}

export default Navbar
