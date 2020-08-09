import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import classes from './Home.module.css'
import { connect } from 'react-redux'
import Row from '../../components/Row/Row'
import Aux from '../../hoc/Aux'
import * as  actions from '../../store/actions/index'
import { getRandom } from '../../shared/utility'

const genres = ['romance', 'edm', 'home', 'party', 'toplists', 'punjabi', 'indie', 'mood', 'workout', 'bollywood', 'chill', 'travel']

class Home extends Component {
    state = {
        loading: true
    }
    componentDidMount() {
        this.props.getData(this.props.token);
    }

    playlistToggleHandler = (data) => {
        this.props.history.replace(`/playlist/${data.id}`, data)
    }

    albumToggleHandler = (data) => {
        this.props.history.replace(`/album/${data.id}`, data)
    }

    render() {
        let categories = getRandom([...genres]);
        let data = this.props.releases && this.props.featured ?
            <Aux>
                <Row data={this.props.releases} name="New Releases" clicked={this.albumToggleHandler} />
                <Row data={this.props.featured} name="Editor's Pick" clicked={this.playlistToggleHandler} />
                {
                    categories.map(category => {
                        return this.props[category] ?
                            < Row key={category} data={this.props[category]} name={category} clicked={this.playlistToggleHandler} />
                            : null;
                    })
                }
            </Aux>
            : null;

        return (
            <div className={classes.Home}>
                <Header />
                {data}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        releases: state.home.newReleases,
        categories: state.home.categories,
        featured: state.home.featured,
        romance: state.home.romance,
        edm: state.home.edm,
        home: state.home.home,
        party: state.home.party,
        toplists: state.home.toplists,
        punjabi: state.home.punjabi,
        indie: state.home.indie,
        mood: state.home.mood,
        workout: state.home.workout,
        bollywood: state.home.bollywood,
        chill: state.home.chill,
        travel: state.home.travel,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: (token) => dispatch(actions.getData(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
