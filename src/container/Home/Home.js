import React, { Component } from 'react'
import Button from '../../components/UI/Button/Button'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux';
import classes from './Home.module.css'


class Home extends Component {

    componentDidMount() {
        this.props.userHandler(this.props.accToken)
    }

    render() {
        return (
            <div className={classes.Home}>
                <Button btnType="Success" clicked={this.props.userLogout}>User</Button>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        accToken: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userHandler: (token) => dispatch(actions.getUser(token)),
        userLogout: ()=>dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);