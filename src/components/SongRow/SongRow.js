import React from 'react';
import classes from './SongRow.module.css';

const SongRow = (props) => {
    return (
        <div className={classes.Row}>
            <img
                className={classes.Album}
                src={props.track.album.images[0].url}
                alt="" />
            <div className={classes.Info}>
                <h1>{props.track.name}</h1>
                <p>
                    {props.track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {props.track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow;