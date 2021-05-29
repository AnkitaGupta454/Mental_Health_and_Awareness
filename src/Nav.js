import React from 'react';
import logo from './assets/logo.jpg';
import './Nav.css';

const Nav=()=>{
    return(
        <div className="nav-container">
         <div className="nav-left">
                <img className="logo" src={logo} alt="logo" />
                
                <p className="Heading"><a href="index.html">OuttaStress</a></p>
                    
                     <p className="Heading"><a href="yoga.html">Yoga</a></p>
                    
                     <p className="Heading"><a href="motivation.html">Movitavion</a></p>
                     
                     <p className="Heading"><a href="do.html">Tips </a></p>
            </div>
        </div>
    )
};
export default Nav;