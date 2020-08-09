import React from 'react'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import classes from './Tracks.module.css';
import Songrow from '../SongRow/SongRow'

const Tracks = (props) => {
    const styleIcons = {
        marginRight: '20px'
    }

    let info = null;
    if (props.type === 'playlist') {
        info = <p>{props.description}</p>
    }
    if (props.type === 'album') {
        info = <p>{props.artists.map(artist => <span key={artist.name} className={classes.Clickable}>{artist.name}</span>)}</p>
    }

    return (
        <div>
            <div className={classes.Info}>
                <img
                    src={props.url}
                    alt={props.name} />
                <div className={classes.InfoText}>
                    <strong>{props.type}</strong>
                    <h2>{props.name}</h2>
                    {info}
                </div>
            </div>
            <div className={classes.Songs}>
                <div className={classes.Icon}>
                    <PlayCircleFilledIcon style={styleIcons} className={classes.Shuffle} />
                    <FavoriteIcon style={styleIcons} />
                    <MoreHorizIcon style={styleIcons} />
                </div>
                {
                    props.tracks.map(track => {
                        return <Songrow key={track.id} track={track} type={props.type} clickAlbum={props.onAlbumClick}/>
                    })
                }
            </div>
        </div>
    )
}

export default Tracks;