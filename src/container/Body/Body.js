import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
import Axios from 'axios';
import Tracks from '../../components/Tracks/Tracks';
import { getAlbum, getPlaylist } from './getData'

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
                if (this.props.location.state.type === 'playlist') {
                    getPlaylist(response.data, tracks);
                }
                if (this.props.location.state.type === 'album') {
                    getAlbum(response.data, tracks);
                }
                this.setState({ tracks: tracks });
                this.setState({ loading: false })
            })
            .catch(err => {
                this.setState({ error: err.response })
            })
    }

    albumToggleHandler = (data) => {
        this.props.history.replace(`/album/${data.id}`, data)
    }

    render() {

        return (
            <div>
                <Header user={null} />
                <Tracks
                    url={this.props.location.state.images[0].url}
                    name={this.props.location.state.name}
                    description={this.props.location.state.description}
                    artists={this.props.location.state.artists}
                    tracks={this.state.tracks ? this.state.tracks : []}
                    type={this.props.location.state.type}
                    onAlbumClick={this.albumToggleHandler} />

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