import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap'
import {Link} from 'react-router-dom'

import alert from 'sweetalert2'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onLogin = (e) => {
    e.preventDefault()
    const { email , password } = this.state
    if (email === '' && password === '') {
      alert.fire({
        icon: 'error',
        title: 'Sorry',
        text: 'Please fill the form Dude!'
      })
    } else {
      if (JSON.parse(localStorage.getItem(email))) {
        const user = JSON.parse(localStorage.getItem(email, password))
        if (email === user.email && password === user.password) {
          const {email, password} = this.state
          localStorage.setItem('token', JSON.stringify(email, password))
          this.props.history.push('/profile')
        } else {
          alert.fire({
          icon: 'error',
          title: 'sorry',
          text: 'Wrong email and password'
          })
        }
      } else {
        alert.fire({
          icon: 'error',
          title: 'Sorry',
          text: 'User cannot found please register'
        })
      }
    }
  }

  componentDidMount(){
    if(localStorage.getItem('token')){
      this.props.history.push('/login')
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