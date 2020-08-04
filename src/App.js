import React, { Component } from 'react';
// import Layout from './container/Layout/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Home from './container/Home/Home'
import * as actions from './store/actions/index'
import { connect } from 'react-redux';
import Aux from './hoc/Aux'
import Auth from './container/Auth/Auth';
import Player from './components/Player/Player';

class App extends Component {
  componentDidMount() {
    this.props.isAuth();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isAuthenticated !== nextProps.isAuthenticated
  }

  render() {
    let homePage = (
      <Aux>
        <Switch>
          <Route path="/auth" component={Auth} />
        </Switch>
        <Redirect to="/auth" />
      </Aux>

    )
    if (this.props.isAuthenticated) {
      homePage = (
        // <Aux>
        //   <Layout show={this.props.accToken}>
        //     <Switch>
        //       <Route path='/' component={Home} />
        //     </Switch>
        //   </Layout>
        // </Aux>
        <Player />
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
