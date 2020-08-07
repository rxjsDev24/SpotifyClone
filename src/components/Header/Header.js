import React from 'react';
import classes from './Header.module.css';
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Header = (props) => {
    return (
        <div className={classes.Header}>
            <div className={classes.Left}>
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                />
            </div>
            <div className={classes.Right}>
                <Avatar alt="{props.user.name}" src="" />
                <h4>Your Name</h4>
            </div>

        </div>

    )
}
export default Header;