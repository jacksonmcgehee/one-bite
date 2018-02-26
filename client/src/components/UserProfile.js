import React, { Component } from 'react'
import axios from 'axios'

class UserProfile extends Component {

    state = {
        user: {}
    }

    async componentWillMount() {
        const res = await axios.get('/users')
        console.log('User get res.data: ', res.data)
        this.setState({user: res.data})
    }
    render() {

        

        return (
            <div>
                <h1>Hello {this.state.user.nickname}</h1>
            </div>
        );
    }
}

export default UserProfile