import React, { Component } from 'react'
import { Container, Row, Button, 
  Table, Card, CardBody, 
  CardHeader, Modal, ModalBody, ModalHeader, Form, Input, ModalFooter } from 'reactstrap'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.checkToken = () => {
      if (!localStorage.getItem('token')) {
        alert('You must login first')
        props.history.push('/login')
      }
      else {
        props.history.push('/profile')
      }
    }
    
    this.state = {
      email: '',
      password: '',
      showModal: false
    }
    this.logout = this.logout.bind(this)
  }

  logout() {
    localStorage.removeItem('token')
    this.props.history.push('/home')
  }

   handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  editUser = (e) => {
    e.preventDefault()
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(data)
    localStorage.setItem(this.state.email, JSON.stringify(data))
    this.setState({showModal: !this.state.showModal})
  }

  toggleModal = (e) => {
    this.setState({showModal: !this.state.showModal})
  }

  componentDidMount() {
    this.checkToken()
  }

  render() {
    const email = JSON.parse(localStorage.getItem('token'))
    return (
      <>
        <Row className="no-gutters w-100 h-100">
          <div className="d-flex flex-row w-100">
            <div className="w-100 d-flex flex-column">
              <div className="top-navbar sticky-top">
              </div>
              <Container fluid className="mt-4">
                <Card>
                  <div className="d-flex flex-row">
                    <CardHeader>Users Profile</CardHeader>
                  </div>
                  <div className="d-flex justify-content-end mr-4">
                    <Button color="danger" onClick={this.logout}>logout</Button>
                  </div>
                  <CardBody>
                    <Table striped bordered hover>
                      <thead align="center">
                        <tr>
                          <th>Username</th>
                          <th>Password</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody align="center">
                        <tr>
                          <td>{email}</td>
                          <td>*********</td>
                          <td align="center">
                            <Button color="warning text-white" onClick={this.toggleModal}>Edit</Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Container>
            </div>
          </div>
        </Row>
        <Modal isOpen={this.state.showModal}>
            <ModalHeader>Edit User</ModalHeader>
            <ModalBody>
              <Form>
                <h6>Email</h6>
                <Input className="mt-2" name="email" value={this.state.email} onChange={this.handleChange}/>
                <h6 className="mt-2">Password</h6>
                <Input className='mt-2' name='password' type="password" value={this.state.password} onChange={this.handleChange}/>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.editUser}>Submit</Button>
              <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
      </>
    )
  }
}

export default Profile