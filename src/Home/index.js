import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

class Home extends Component {
    state = {
        email: '',
        password: ''
      }

    render() {
        return (
            <Container> 
                <Header as='h2'>Welcome to Cup of Sugar</Header>
                <p>Have you ever been sitting there on your couch getting ready to watch a season finale only to find out that your remote has run out of batteries. You check in your supply drawer and see no batteries in site. What do you do now?</p>
                <p>You can log onto cup of sugar and ask your surrounding neighbors to see if they have the right batteries and how much they would cost.</p>
                <p>Cup of Sugar is a locations based classified advertisement website where users can easily look for items they might need in short notice from the community around them. Users can also help out their neighbors</p>

            </Container>
        )
    }
}

export default Home;