import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
export default ChildComponent => {
    class RequireAuth extends Component {
        render() {
            switch(this.props.auth) {
                case false:
                    return <Redirect to="/"/>
                case null:
                    return <div>loading...</div>
                default:
                    return <ChildComponent {...this.props} />
            }
        }
    }
    function mapStateToState({auth}) {
        return {auth}
    }
    return connect(mapStateToState)(RequireAuth)
}