import React, { Component } from 'react';
import { Grid, Header, Button} from 'semantic-ui-react';


class Profile extends Component {
  state = {
     id: 1,
     email: '',
     username: ''
    }


  render(){
      console.log(this.props)
    return (
      <Grid columns={2} padded style={{ height: '100vh'}}>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h2' textAlign='center'>
              Items wanted by {this.props.userInfo.username}
            </Header>
          </Grid.Column>
          <Grid.Column>
              <Button>
                Add Items
              </Button>
              <Button>
                  Items others want
              </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      )
  }
}
export default Profile;
