import React, { Component } from 'react';
import { loginUrl } from './Login';
import classes from './Auth.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'
// import { Redirect } from 'react-router-dom';


class Auth extends Component {
    componentDidMount() {
        this.props.authenticate();
    }

    render() {
        let auth = (
            <div className={classes.Auth}>
                <img
                    src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                    alt="Spotify-logo"
                />
                <a href={loginUrl}>Sign In / SignUp</a>
            </div>
        );
        return auth;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: () => dispatch(actions.storeAccessToken())
    }
}

export default connect(null, mapDispatchToProps)(Auth);