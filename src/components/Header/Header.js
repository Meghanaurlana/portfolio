import React from "react";
import './Header.css';
import logo from '../../Assets/logo.png'
import { Nav } from "react-bootstrap";
// import { BsFillSunFill } from "react-icons/bs";
// import { BsFillMoonFill } from "react-icons/bs";


const Header = () => {
  return (

   <Nav className='navbar'> 
    <div className="n-left">
      <div className="logo-container">
      <img className="logo" alt="logo" src={logo} />
      </div>
      <div className="name">Meghana</div>
    </div>
    <div className="n-right">
<div className="list">
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>works</li>
    <li></li>
  </ul>
</div>

</div>
   </Nav>
  )
}

export default Header;