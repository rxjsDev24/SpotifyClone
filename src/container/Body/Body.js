import React, { Component } from 'react';
import classes from './Body.module.css';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from '../../components/SongRow/SongRow';
import Axios from 'axios';

class Body extends Component {

    state = {
        tracks: null,
        error: null,
        loading: true
    }

    componentDidMount() {
        Axios.get(this.props.location.state.href + '/tracks', {
            headers: { 'Authorization': 'Bearer ' + this.props.token }
        })
            .then(response => {
                const tracks = [];
                response.data.items.map(item => {
                    return tracks.push({
                        album: {
                            artists: item.track.album.artists,
                            images: item.track.album.images,
                            href: item.track.album.href,
                            id: item.track.album.id,
                            type: item.track.album.type,
                            name: item.track.album.name,
                            albumType: item.track.album.album_type
                        },
                        artists: item.track.artists,
                        duration: item.track.duration_ms,
                        href: item.track.href,
                        id: item.track.id,
                        name: item.track.name,
                        popularity: item.track.popularity
                    })
                })
                this.setState({ tracks: tracks });
                this.setState({ loading: false })
            })
            .catch(err => {
                this.setState({ error: err.response.data })
            })
    }
    render() {
        const styleIcons = {
            marginRight: '20px'
        }
        let songs = null;
        if (this.state.tracks) {
            songs = this.state.tracks.map(track => {
                return <SongRow key={track.id} track={track} />
            })
        }

        return (
            <div>
                <Header user={null} />
                <div className={classes.Info}>
                    <img
                        src={this.props.location.state.images[0].url}
                        alt={this.props.location.state.name} />
                    <div className={classes.InfoText}>
                        <strong style={{ textTransform: 'capitalize' }}>{this.props.location.state.type}</strong>
                        <h2>{this.props.location.state.name}</h2>
                        <p>{this.props.location.state.description}</p>
                    </div>
                </div>
                <div className={classes.Songs}>
                    <div className={classes.Icon}>
                        <PlayCircleFilledIcon style={styleIcons} className={classes.Shuffle} />
                        <FavoriteIcon style={styleIcons} />
                        <MoreHorizIcon style={styleIcons} />
                    </div>
                    {songs}
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    }
}


export default connect(mapStateToProps)(Body);