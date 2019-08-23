import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

class Home extends Component {
    state = {
        email: '',
        password: ''
      }

    render() {
        return (
            <Message>Hi</Message> 
        )
    }
}

export default Home;