import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
    return (
        <div className="header">
            <div className='header__logo'>
        <StoreMallDirectoryIcon className='header__logoImage' fontSize='large'/>
        <h2><div className='headerLogoTitle'>eShop</div></h2>
      </div>
      <div className='header__search'> 
          <input div className='header__searchInput' />
          <SearchIcon />
      </div>
      <div className='header__nav'>
        <div className='nav__item'>
          <span className='nav__itemLineOne'>Hello Gues</span>
          <span className='nav__itemLineTwo'>Sign In</span>
        </div>
        <div className='nav__item'>
        <span className='nav__itemLineOne'>Your</span>
        <span className='nav__itemLineTwo'>Shop</span>
        </div>
        <div className='nav__item'>
        <ShoppingBasketIcon fontSize='large' /> 
        <span className='nav__itemLineTwo'>0</span>
        </div>
      </div>
        </div>
    )
}

export default Header