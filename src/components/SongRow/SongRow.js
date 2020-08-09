import React from 'react';
import classes from './SongRow.module.css';
import Aux from '../../hoc/Aux';
import MusicNoteIcon from '@material-ui/icons/MusicNote';


const Songrow = (props) => {
    return (
        <div className={classes.Row}>
            {
                props.track.album ?
                    <img
                        className={classes.Album}
                        src={props.track.album.images[0].url}
                        alt="" />
                    : <MusicNoteIcon className={classes.Album} />
            }

            <div className={classes.Info}>
                <h1 style={{ textTransform: 'capitalize' }}>{props.track.name}</h1>
                <div className={classes.Artist}>
                    <p>{props.track.artists.map(artist => <span key={artist.name} className={classes.Clickable}>{artist.name}</span>)}</p>
                    {
                        props.type === 'playlist' ?
                            <Aux>
                                <span> • </span>
                                <p
                                    className={classes.Clickable}
                                    onClick={() => props.clickAlbum({
                                        id: props.track.album.id,
                                        href: props.track.album.href,
                                        artists: props.track.album.artists,
                                        images: props.track.album.images,
                                        name: props.track.album.name,
                                        type: props.track.album.type
                                    })}>
                                    {props.track.album.name}
                                </p>
                            </Aux>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Songrow;