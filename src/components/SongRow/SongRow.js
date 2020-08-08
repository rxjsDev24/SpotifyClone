import React from 'react';
import classes from './SongRow.module.css';

const Songrow = (props) => {
    return (
        <div className={classes.Row}>
            <img
                className={classes.Album}
                src={props.track.album.images[0].url}
                alt="" />
            <div className={classes.Info}>
                <h1>{props.track.name}</h1>
                <div className={classes.Artist}>
                    <p>{props.track.artists.map(artist => <span key={artist.name} className={classes.Clickable}>{artist.name}</span>)}</p>
                    <span> • </span>
                    <p className={classes.Clickable}>{props.track.album.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Songrow;