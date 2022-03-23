import React from 'react';
import { NavLink } from "react-router-dom";
import { main_categories } from '../../../models/productCategories';
//import { Link,Redirect,NavLink} from 'react-router-dom';
//console.log(main_categories)

import './header.css';
const NavBar = () => {


    return (<header className='navbar'>
         <div className='navbar__title navbar__item'><NavLink to="/">Logo</NavLink></div>
        {
            main_categories.map((e)=>{
                //console.log("navbar",e)
                let path = `/${e}`
                console.log("navbar",path)
             return  (<div className='navbar__item'><NavLink to={path}>{e}</NavLink></div>) 
            })
        }

     
   
   
    <div className='navbar__item'><NavLink to="/Cat01">Cat 01</NavLink></div>
   
   

     
    
</header>)
}
    
   /*  <header className='navbar'>

     
        <div className='navbar__title navbar__item'><NavLink to="/">Logo</NavLink></div>
        <div className='navbar__item'><NavLink to="/All">All</NavLink></div>
        <div className='navbar__item'><NavLink to="/Cat01">Cat 01</NavLink></div>
        <div className='navbar__item'>Cat 02</div>
       

         
        
    </header> */


export default NavBar;