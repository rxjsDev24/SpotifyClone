import React from 'react';
import classes from './Player.module.css';
import Body from '../Body/Body';
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer';

const Player = (props) => {

    return (
        <div className={classes.Player}>
            <div className={classes.Body}>
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Player;