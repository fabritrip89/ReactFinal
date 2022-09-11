
import React from "react";
import { NavLink } from "react-router-dom";
import Widget from "./cartWidget";


export const NavBar =() => {
  return (
    <div className="container">
      <div className="nav">
        <div className="nav_brand">
          <NavLink className= "nav_link" to='/' >  Marca </NavLink>  
          </div>
          <ul className="nav_list"> 
          <li>
          <NavLink className="nav__link" to= '/categoria/films' > Categoria</NavLink>

          </li>
          <li>  
          <NavLink className="nav__link" to='/categoria/series' > Categoria 1</NavLink>

          </li>

          <li>
          <NavLink className="nav__link" to='/cart' > Categoria 1</NavLink>


          <Widget />
          </li>


          </ul>
 

    
      </div>
      </div>

  );
}

export default NavBar;
