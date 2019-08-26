import React , { Component} from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Profile from './Profile';
import { routes } from './const/routes'
import NavBar from './Navbar';
import CreateItem from './CreateItem'

const My404 = () =>{
  return (
    <div>
      You are lost
    </div>
    )
}



class App extends Component {
  
  state = {
    username: '',
    email: '',
    image: '',
    loading: true,
  }


  logIn = async (loginInfo) => {
    try {

      const loginResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
        method: 'POST',
        credentials: 'include',// on every request we have to send the cookie
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await loginResponse.json();


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


  register = async (data) => {
     try {

      const registerResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/register`, {
        method: 'POST',
        credentials: 'include',
        body: data,
        headers: {
          'enctype': 'multipart/form-data'
        }
      })

      const parsedResponse = await registerResponse.json();

      console.log(parsedResponse)

      this.setState({
        ...parsedResponse.data,
        loading: false
      })
      return parsedResponse;

    } catch (err) {
      console.log(err)
    }
  }

  logout = async () => {
    try {
      const logoutResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/logout`, {
        method: 'GET'
      })
      this.setState({
        isLogged: false,
        username: '',
        email: '',
        id: '',

      })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <main>
        <NavBar routes={routes} logout={this.logout}/>
        <br/>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} home={this.home} />} />
          <Route exact path="/login" render={(props) => <Login {...props} logIn={this.logIn} />} />
          <Route exact path="/register" render={(props) => <Register {...props} register={this.register} /> } />
          <Route exact path="/profile" render={(props) =>  <Profile {...props} userInfo={this.state}/> } />
          <Route exact path="/createitem" render={(props) =>  <CreateItem {...props} userInfo={this.state}/> } />
          <Route component={My404} />
        </Switch>
    </main>
    );
  }

}

export default App;
