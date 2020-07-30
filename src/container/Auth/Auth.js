import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button'
import classes from './Auth.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'
import { Redirect } from 'react-router-dom';


class Auth extends Component {
    componentDidMount() {
        this.props.authenticate();
    }

    render() {
        let auth = (
            <div className={classes.Auth}>
                <img
                    src="https://www.fusingmarketing.com/wp-content/uploads/2018/11/spotify-logo-1.png"
                    alt="Spotify-logo"
                />
                <Button ><a href="https://spotifyredesignserver.herokuapp.com/login">Sign In</a></Button>
            </div>
        );

        if (this.props.isAuthenticated) {
            auth = <Redirect to="/" />
        }

        return auth;
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: () => dispatch(actions.storeAccessToken())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);