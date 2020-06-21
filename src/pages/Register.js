import React, { Component } from 'react'
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import alert from 'sweetalert2'

class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleRegist = async () => {
    const { email, password } = this.state
    if (!((this.state.email === '') || (this.state.password === ''))) {
      if ((this.state.password.match(/^(?=.*[0-9a-zA-Z][!@#$%^&*])[0-9a-zA-Z!@#$%^&*]/)) && this.state.password.length > 8) {
        if (JSON.parse(localStorage.getItem(this.state.email))) {
          alert.fire({
            icon: 'error',
            title: 'Sorry',
            text: 'Email has been taken bro!'
          })
        } else {
          localStorage.setItem(this.state.email, JSON.stringify({ email, password }))
          this.props.history.push('/login')
        }
      } else {
        alert.fire({
          icon: 'error',
          title: 'Sorry',
          text: 'Password must length > 8 and contain number, char, symbol'
        })
      }
    } else {
      alert.fire({
        icon: 'error',
        title: 'Sorry',
        text: 'All form must be filled'
      })
    }
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center content">
          <Jumbotron>
            <Form onSubmit={this.handleRegist}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Your Mail" onChange={this.handleChange} ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Your Password" onChange={this.handleChange} ></Input>
              </FormGroup>
              <div>
                <Button color="success" onSubmit={this.handleRegist}>Register</Button>
              </div>
            </Form>
          </Jumbotron>
        </div>
      </>
    )
  }
}

export default Register