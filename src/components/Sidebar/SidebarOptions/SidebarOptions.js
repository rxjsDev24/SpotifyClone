import React from 'react';
import classes from './SidebarOptions.module.css'

const SidebarOptions = ({ title, Icon }) => {
    return (
        <div className={classes.Option}>
            {Icon && <Icon className={classes.Icon} />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}
export default SidebarOptions;