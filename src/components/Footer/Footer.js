import React from 'react';
import classes from './Footer.module.css';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
// import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

const Footer = (props) => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Left}>
                <img
                    className={classes.AlbumLogo}
                    src="https://i.scdn.co/image/6da5fd502f073619aa9a2bf84fd4b1708f8d218f"
                    alt="" />
                <div className={classes.SongInfo}>
                    <h4>Song Name</h4>
                    <p>...</p>
                </div>

            </div>
            <div className={classes.Center}>
                <ShuffleIcon className={classes.Green} />
                <SkipPreviousIcon className={classes.Icon} />
                <PlayCircleOutlineIcon className={classes.Icon} />
                <SkipNextIcon className={classes.Icon} />
                <RepeatIcon className={classes.Green} />
            </div>
            <div className={classes.Right}>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider style={{ color: '#1db954' }} />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}
export default Footer;