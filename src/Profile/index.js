import React, { Component } from 'react';
import { Grid, Header, Button, Form, Segment, Item} from 'semantic-ui-react';


class Profile extends Component {
  state = {
     name: '',
     address: ''
    }

    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = async (e) => {
      
      e.preventDefault();
        console.log('is valid', this.state)
        const data = new FormData();
        data.append('name', this.state.name)
        data.append('address', this.state.address);
        console.log('form', data)
    
        const registerCall = this.props.createItem(data);
    
      registerCall.then((data) => {
        console.log('call', data)
          if(data.status.message === "Success") {
          } else {
            console.log(data, ' this should have an error message? How could you display that on the screen')
          }
      })
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
            {/* {
              Item.map((item, i) => {
                return(
                  <div key={i}>
                    <p>name:${item.name}</p>
                    <p>address:${item.address}</p>
                    <Button>
                      Edit
                    </Button>
                    <Button>
                      Delete
                    </Button>
                  </div>
                )
              })
            } */}
          </Grid.Column>
          <Grid.Column>
              <Form onSubmit={this.handleSubmit}>
                <Segment stacked>
                Item name:
                <Form.Input placeholder='name' type='text' name='name' onChange={this.handleChange}/>
                address:
                <Form.Input placeholder='address' type='address' name='address' onChange={this.handleChange}/>
                <Button fluid size='large' type='submit'>Add Item</Button><br/>
                </Segment>
              </Form>
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
