import React from 'react';
import classes from './Layout.module.css';
import Menubar from '../Navigation/Menubar/Menubar'

const layout = (props) => (
    <div className={classes.Content}>
        <Menubar />
        <main className={classes.Main}>
            {props.children}
        </main>
    </div>
)

export default layout;