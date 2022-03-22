import React from 'react';
import { NavLink } from "react-router-dom";
//import { Link,Redirect,NavLink} from 'react-router-dom';
import './header.css';
const NavBar = () => (
    <header className='navbar'>

     
        <div className='navbar__title navbar__item'><NavLink to="/">Home</NavLink></div>
        <div className='navbar__item'><NavLink to="/All">All</NavLink></div>
        <div className='navbar__item'><NavLink to="/Cat01">Cat 01</NavLink></div>
        <div className='navbar__item'>Cat 02</div>
         <div className='navbar__item'><NavLink to="/">Log out</NavLink></div>  

         
        
    </header>
);

export default NavBar;