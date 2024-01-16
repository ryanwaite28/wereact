import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider"

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="header">
      <NavLink to='/' style={{ textDecoration: "none" }}>
        <div className='header__logo'>
          <StoreMallDirectoryIcon className='header__logoImage' fontSize='large' />
          <h2><div className='headerLogoTitle'>eShop</div></h2>
        </div>
      </NavLink>

      <div className='header__search'>
        <input className='header__searchInput' />
        <SearchIcon />
      </div>

      <div className='header__nav'>
        <div className="nav__item" onClick={() => navigate("/login")}>
          <span className='nav__itemLineOne'>Hello Guest</span>
          <span className='nav__itemLineTwo'>Sign In</span>
        </div>

        <div className='nav__item'>
          <span className='nav__itemLineOne'>Your</span>
          <span className='nav__itemLineTwo'>Shop</span>
        </div>

        <NavLink to="/checkout" style={{ textDecoration: "none" }}>
          <div className='nav__item'>
            <ShoppingBasketIcon fontSize='large' />
            <span className='nav__itemLineTwo'>{basket?.length ?? 0}</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
