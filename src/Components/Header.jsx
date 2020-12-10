import React from 'react';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton, Tab } from '@material-ui/core';
//import AddIcon from '@material-ui/icons/Add';
import ShopIcon from '@material-ui/icons/Shop';
import ForumIcon from '@material-ui/icons/Forum';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import { useStateValue } from "./StateProvider";
//import { Photo } from '@material-ui/icons';
//import userEvent from '@testing-library/user-event';
import { Link } from 'react-router-dom';
import { auth } from '../../src/firebase/firebase';



const Header = ({ currentUser }) => (
    //const [{user}, dispatch] = useStateValue();
        <div className="header">
            <Link to='/'>
              <div className="header__left">
             
                <img
                    src="https://www.beyond.ca/wp-content/uploads/2016/02/BMW-M-Logo.jpg"
                     alt=""
                />
              </div>
            </Link>
            <div className="tab">
               <Tab label="WOMENS" />
               <Tab label="MENS" />
               <Tab label="KIDS" />
               <div className="shop-link">
               <Link to="/shop">
               <Tab label="SHOP" />
               </Link>
               </div>
            </div>
            
            <div className="header__center">
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Stor" />
                </div>
            </div>

            <div className="header__right">
              { 
                currentUser ?
                <div className="header__info" onClick={() => auth.signOut()}>
                    <Avatar />
                    <h4>SIGN OUT</h4>
                </div>

                :
                
                <Link className="header__info" to="/signin">
                    <h4>SIGN IN</h4>
                </Link>

              }   

                <div className="header__icon">
                <IconButton>
                    <ShopIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <AddShoppingCartIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                </div>
            </div>
        </div>
    );

export default Header;
