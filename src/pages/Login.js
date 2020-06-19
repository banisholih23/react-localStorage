import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap'
import {Link} from 'react-router-dom'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      error: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.onLogin = this.onLogin.bind(this)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onLogin = (e) => {
    e.preventDefault()
    if (localStorage.getItem('token', 'true')) {
      this.props.history.push('/home')
    } else {
      this.setState({error: 'Wrong Username or Password'})
    }
  }

  componentDidMount(){
    if(this.props.location.state){
      const {error} = this.props.location.state
      this.setState({error})
    }
  }


  render() {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center p-5">
          <Form onSubmit={this.onLogin}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Your Mail" onChange={this.handleChange} ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Your Password" onChange={this.handleChange} ></Input>
            </FormGroup>
            <div>
              <Button onSubmit={this.onLogin} color="success">Login</Button>
              <Link to="/register">
                <Button color="info" className="text-white ml-2" >Register</Button>
              </Link>
            </div>
          </Form>
        </div>
      </>
    )
  }
}

export default Login