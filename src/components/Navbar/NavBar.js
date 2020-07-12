import React from 'react';
//Bootstrap
import { Navbar} from 'react-bootstrap';
//Router
import { NavLink } from 'react-router-dom';


export default function NavBar() {

  return (
      <Navbar bg="dark" variant="dark" expand="lg">
          <NavLink
              isActive={(match, location) => {
                  if (match && match.url === "/") {
                      return true;
                  }
                  return false;
              }}
              className='nav-link' to={'/'} >Home
          </NavLink>
          <NavLink className='nav-link' to={'/tournaments'} >Tournaments</NavLink>
       </Navbar>
  );
}
