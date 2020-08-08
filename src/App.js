import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Body from './container/Body/Body';
import * as actions from './store/actions/index'
import { connect } from 'react-redux';
import Auth from './container/Auth/Auth';
import Player from './components/Player/Player';
import Home from './container/Home/Home';

class App extends Component {
  componentDidMount() {
    this.props.isAuth();
  }
  render() {
    let homePage = (
      <Auth />
    )
    if (this.props.isAuthenticated) {
      homePage = (
        <Player>
          <Switch>
            <Route path="/album/:id" component={Body}/>
            <Route path="/artist/:id" component={Body}/>
            <Route path="/playlist/:id" component={Body}/>
            <Route path="/" component={Home} />
          </Switch>
        </Player>
      )
    }
    return homePage;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isAuth: () => dispatch(actions.checkAuthState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
