import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: '',
    }
    this.handleRegist = this.handleRegist.bind(this)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleRegist = async () => {
    const {email, password} = this.state
    localStorage.setItem('token', JSON.stringify({email, password}))
    this.props.history.push('/login', this.state);
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center p-5">
          <Form onSubmit={this.handleRegist}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Your Mail" onChange={this.handleChange} ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Your Password"  onChange={this.handleChange} ></Input>
            </FormGroup>
            <div>
              <Button color="success" onSubmit={this.handleRegist}>Register</Button>
            </div>
          </Form>
        </div>
      </>
    )
  }
}

export default Register