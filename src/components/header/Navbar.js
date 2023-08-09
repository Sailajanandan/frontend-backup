import React from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>

      <header>
        <nav>
          <div className="left">
            <div className='navlogo'>
              { /* <NavLink to="/"><a><p className='header-logo'>Asmi <span className='header-text-white'>Studio</span></p></a></NavLink> */
              <NavLink to="/"><a><img src='./asmistudio.svg' className='img-fluid' alt="" /></a></NavLink> }

            </div>
            <div className='nav_searchbaar'>
            <div className="search_icon">
                {/* <i className="fas fa-search" id="search"></i> */}
                <SearchIcon id="search" />
              </div>
              <input type="text" name="" id="" placeholder='Search For Products, Brands and More'/>
            </div>
          </div>
          <div className="right">
            <div className="nav_btn">
             <NavLink to="/login">
            <ul class="navbar-links">
        <li class="navbar-dropdown">
          <a href="#"><i className='bi bi-person'></i><span className='mobile-none'>Sign in</span> <i className='bi bi-chevron-down'></i></a>
          <div class="dropdown">
            <a href="#">My Account</a>
            <a href="#">My Wishlist</a>
            <a href="#">Logout</a>
          </div>
        </li>
        </ul>
            </NavLink>
            </div>
            <div className='cart_btn'>
              
              <NavLink to="/getproductsone/:id"><i class="bi bi-cart2"></i><span className='mobile-none'>Cart</span></NavLink>
              {/* <Badge badgeContent={4} color="primary">
              </Badge> */}
            </div>
            {/* <Avatar className="avatar" /> */}
          </div>
        </nav>
      </header>
    </div>
  )
}
