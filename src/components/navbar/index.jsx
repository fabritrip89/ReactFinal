
import React from "react";
import { NavLink } from "react-router-dom";
import Widget from "./cartWidget";


export const NavBar =() => {
  return (
    <div className="container">
      <div className="nav">
        <div className="nav_brand">
          <NavLink className= "nav_link" to='/' >  PadelRock </NavLink>  
          </div>
          <ul className="nav_list"> 
          <li>
          <NavLink className="nav__link" to= '/categoria/amateur' >Palas Principiantes </NavLink>

          </li>
          <li>  
          <NavLink className="nav__link" to='/categoria/inter' >Palas Nivel Intermedio </NavLink>

          </li> 

          <li>
          <NavLink className="nav__link" to='/categoria/pro' > Palas Profesionales</NavLink>


         
          </li>

          <li>
          <NavLink className="nav__link" to='/cart' > Carrito</NavLink>

        
         
          </li>

          <Widget />

          </ul>
 

    
      </div>
      </div>

  );
}

export default NavBar;
