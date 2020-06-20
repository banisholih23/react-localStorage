import React, { Component } from 'react'
import { Container, Row, Button, Table, Card, CardBody, CardHeader } from 'reactstrap'

class Home extends Component {
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
      password: ''
    }
    this.logout = this.logout.bind(this)
  }

  logout() {
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  componentDidMount() {
    this.checkToken()
  }

  render() {
    const email = JSON.parse(localStorage.getItem('token'))
    const password = JSON.parse(localStorage.getItem('token'))
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
                            <Button color="success">Edit</Button>
                            <Button color="danger" className="ml-2">Delete</Button>
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
      </>
    )
  }
}

export default Home