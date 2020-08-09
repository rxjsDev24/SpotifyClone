import React from 'react';
import classes from './Player.module.css';
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer';

const Player = (props) => {
    // console.log("check player render");
    return (
        <div className={classes.Player}>
            <div className={classes.Container}>
                <Sidebar />
                <div className={classes.Body}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Player;