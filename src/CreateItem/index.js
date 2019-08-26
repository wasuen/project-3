import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment} from 'semantic-ui-react';

class CreateItem extends Component {
    state = {
      name: '',
      address: '',
      createdby:''
    }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const addItem = this.props.addItem(this.state);
    console.log(this.state)

    addItem.then((data) => {
      if(data.status.message === 'Success'){
        this.props.history.push('/profile')
      } else {
        console.log(data, this.props)
      }
    }).catch((err) => {
      console.log(err)
    })

  }


  render(){
    return (
      <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}}>
        <Grid.Column style={{maxWidth: 450}}>
          <Header as='h2' textAlign='center'>
            Add Item
          </Header>
          <Form onSubmit={this.handleSubmit}>
              <Segment stacked>
              Item name:
              <Form.Input placeholder='name' type='text' name='name' onChange={this.handleChange}/>
              address:
              <Form.Input placeholder='address' type='address' name='address' onChange={this.handleChange}/>
              createdby:
              <Button fluid size='large' type='submit'>Add Item</Button><br/>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      )
  }
}

export default CreateItem;
