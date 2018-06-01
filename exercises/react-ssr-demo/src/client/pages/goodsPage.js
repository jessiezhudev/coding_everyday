import React, {Component} from 'react'
import {fetchGoods} from '../actions'
import {connect} from 'react-redux'
class goodsPage extends Component {
    componentDidMount() {
        this.props.fetchGoods()
    }
    renderList() {
        return this.props.goods.map((item, index) =>{
            return (
                <li key={index}>
                    {item}
                </li>
            )
        })
    }
    render() {
        return (
            <div>
            A list of goods:
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        goods: state.goods
    }
}


function loadData(store) {
    return store.dispatch(fetchGoods())
}

export default {
    loadData,
    component: connect (mapStateToProps, {fetchGoods})(goodsPage)
}