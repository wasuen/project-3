import React, { Component } from 'react';
import { Form, Button, Grid, Header, Message, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Register extends Component {
  
  state = {
      username: '',
      password: '',
      email: '',
    }

  handleChange = (e) => {
    if(e.target.name !== 'image'){
      this.setState({[e.target.name]: e.target.value});
    } else {

      console.log(e.target.files[0])
      this.setState({image: e.target.files[0]});
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('file', this.state.image);
    data.append('username', this.state.username);
    data.append('password', this.state.password);
    data.append('email', this.state.email);

    const registerCall = this.props.register(data);

    registerCall.then((data) => {
      console.log(data)
        if(data.status.message === "Success"){
          this.props.history.push('/profile')
        } else {
          console.log(data, ' this should have an error message? How could you display that on the screen')
        }
    })
  }

  render(){
    return (
      <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}}>
        <Grid.Column style={{maxWidth: 450}}>
          <Header as='h2' textAlign='center'>
            Register
          </Header>
          <Form onSubmit={this.handleSubmit}>
              <Segment stacked>
              Username:
              <Form.Input fluid icon='user' iconPosition='left' placeholder='username' type='text' name='username' onChange={this.handleChange}/>
              Email:
              <Form.Input fluid icon='mail' iconPosition='left' placeholder='email' type='text' name='email' onChange={this.handleChange}/>
              password:
              <Form.Input fluid icon='lock' iconPosition='left' type='password' name='password' onChange={this.handleChange}/>
              <Button fluid size='large' type='submit'>Register</Button>
              <Message>
                Already a member? <Link to='/Login'>Login</Link>
              </Message>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      )
  }
}

export default Register;
