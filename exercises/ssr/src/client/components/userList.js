import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions'
class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }
    renderList() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id}>
                    {user.name}
                </li>
            )
        })
    }
    render() {
        return (
            <div>
                a list of users:
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export function loadData(store) {
    // console.log('loadData')
    return store.dispatch(fetchUsers())
}

export default connect (mapStateToProps, {fetchUsers})(UsersList)