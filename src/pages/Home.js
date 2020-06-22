import React, { Component } from 'react'
import { Jumbotron, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <>
        <div className="h-100 content mt-5">
          <Jumbotron>
            <Row className="h-100 align-items-center">
              <Col className="text-center">
                <h1 className="font-weight-light">Welcome to My Page</h1>
                <p className="lead">Please Login Or Register</p>
              </Col>
            </Row>
            <div className="d-flex justify-content-center align-items-center mb-5">
              <Link to="/login">
                <Button color="success">Login</Button>
              </Link>
              <Link to="/register">
                <Button color="info" className="text-white ml-2" >Register</Button>
              </Link>
            </div>
          </Jumbotron>
        </div>
      </>
    )
  }
}

export default Home