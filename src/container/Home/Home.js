import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import classes from './Home.module.css'
import { connect } from 'react-redux'
import Row from '../../components/Row/Row'
import Aux from '../../hoc/Aux'
import * as  actions from '../../store/actions/index'

class Home extends Component {
    componentDidMount() {
        this.props.getData(this.props.token);
    }

    render() {
        let data = null;
        if (this.props.releases && this.props.categories && this.props.featured) {
            data = (
                <Aux>
                    <Row data={this.props.releases} name="New Releases" />
                    <Row data={this.props.featured} name="Editor's Pick" />
                    <Row data={this.props.categories} name="Categories" />
                </Aux>
            )
        }
        return (
            <div className={classes.Home}>
                <Header />
                {data}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        releases: state.home.newReleases,
        categories: state.home.categories,
        featured: state.home.featured,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: (token) => dispatch(actions.getData(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
