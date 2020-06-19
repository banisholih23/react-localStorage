import React, { Component } from 'react'
import { Button } from 'reactstrap'

class Home extends Component {
  constructor(props){
    super(props)

    this.checkToken = () => {
      if (!localStorage.getItem('token')) {
        alert('You must login first')
        props.history.push('/login')
      }
      else {
        props.history.push('/home')
      }
    }

    this.state = {
      email: '',
      password: ''
    }
    this.logout = this.logout.bind(this)
  }

  logout(){
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  
  componentDidMount(){
    this.checkToken()
    if(localStorage.getItem('token')){
      this.setState(JSON.parse(localStorage.getItem('token')))
    }
  }

  render(){
    let {email} = this.state
    return(
      <>
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
          <h1>Hello {email}!</h1>
          <Button onClick={this.logout}>Logout</Button>
        </div>
      </>
    )
  }
}

export default Home