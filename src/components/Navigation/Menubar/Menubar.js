import React from 'react';
import classes from './Menubar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems'

const menubar = (props) => {
    return (
        <div className={classes.Menubar}>
                <NavigationItems />
        </div>

    )
}

export default menubar;