import React, { Component } from 'react';
import { Grid, Header, Button, Form, Segment} from 'semantic-ui-react';


class Profile extends Component {
  state = {
     name: '',
     address: '',
     items: []
    }

    componentDidMount(){
      this.showItem().then(data => {
        console.log(data, '<---- what')
        this.setState({
          items: data.data
        })
      })
    }

    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = async (e) => {   
      e.preventDefault();
        // const data = new FormData();
        // data.append('name', this.state.name)
        // data.append('address', this.state.address);
        // data.append('user_id', parseInt(this.props.userId))
        // console.log(this.props.userId, "<===user id")
        const obj ={
          name: this.state.name,
          address: this.state.address,
          user_id: this.props.userId
        }

        const registerCall = this.props.createItem(obj);
    
      registerCall.then((data) => {
        console.log(data)
          if(data.status.message === "Success") {
            this.setState({
              name: '',
              address: '',
              items: [...this.state.items, data.data]
            })
          } else {
            console.log(data, 'error')
          }
      })
    }

    showItem = async (data) => {
      try {
        const showResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/item/showitems`)
  
        const parsedResponse = await showResponse.json();
  
  
        this.setState(() => { 
          return {
            ...parsedResponse.data,
            loading: false
          }
        })
  
        return parsedResponse
  
      } catch (err) {
        console.log(err)
      }
    }


  render(){
    console.log(this.state.items)
    return (
      <Grid columns={2} padded style={{ height: '100vh'}}>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h2' textAlign='center'>
              Items wanted by {this.props.userInfo.username}
            </Header>
              {
                (this.state.items).map((item, i) => {
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
              }
          </Grid.Column>
          <Grid.Column>
              <Form onSubmit={this.handleSubmit}>
                <Segment stacked>
                Item name:
                <Form.Input placeholder='name' type='text' name='name' onChange={this.handleChange} value={this.state.name}/>
                address:
                <Form.Input placeholder='address' type='address' name='address' onChange={this.handleChange} value={this.state.address}/>
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
