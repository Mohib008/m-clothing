import React, { classes } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton, Paper, Tab, Tabs, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import { useStateValue } from "./StateProvider";
//import { Photo } from '@material-ui/icons';
//import userEvent from '@testing-library/user-event';



function Header() {
    //const [{user}, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOPd4RlVof0ztjbcbcmcDjzfs1hQV6AL21BA&usqp=CAU"
                     alt=""
            />
            </div>
            <div className="paper">
                <Paper>
                    <Tabs
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="WOMENS" />
                        <Tab label="MENS" />
                        <Tab label="KIDS" />
                    </Tabs>
                </Paper>
            </div>
            
            <div className="header__center">
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Stor" />
                </div>
            </div>

            <div className="header__right">
    
                <div className="header__info">
                    <Avatar />
                    <h4>LogIn</h4>
                </div>
                <div className="header__icon">
                <IconButton>
                    <AddIcon />
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
    )
}

export default Header;
