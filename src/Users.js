import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from './store/actions/userActions';

class Users extends Component {
    componentDidMount(){
        this.props.getUsers();
    }
    render() {
        console.log(this.props.users);
        return (
            <div>
                hi
            </div>
        )
    }
}

const mapStateToProps = (state) => ({users:state.users})


export default connect(mapStateToProps,{getUsers}) (Users)
