import React, { Component } from 'react';
import classes from './Body.module.css';
import Header from '../../components/Header/Header';
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from '../../components/SongRow/SongRow'

class Body extends Component {

    componentDidMount() {
        if (this.props.token)
            this.props.getUser(this.props.token);
        this.props.getTracks(this.props.token);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.tracks !== nextProps.tracks
    }

    render() {
        const styleIcons = {
            marginRight: '20px'
        }
        let songs = null;
        if (this.props.tracks.tracks) {
            songs = this.props.tracks.tracks.items.map(item => (
                <SongRow key={item.track.id} track={item.track} />
            ))
        }
        return (
            <div>
                <Header user={this.props.user} />
                <div className={classes.Info}>
                    <img
                        src={this.props.tracks.images ? this.props.tracks.images[0].url : ""}
                        alt="" />
                    <div className={classes.InfoText}>
                        <strong>{this.props.tracks.type}</strong>
                        <h2>{this.props.tracks.name}</h2>
                        <p>{this.props.tracks.description}</p>
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
        tracks: state.playlist.tracks,
        user: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUser: (token) => dispatch(actions.getUser(token)),
        getTracks: (token) => dispatch(actions.getTracks(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);