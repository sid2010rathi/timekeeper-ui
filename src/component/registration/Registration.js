import { Component } from "react";
import React from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import { validateEmail, matchPassword, validateString, validateWebsite } from "../../utility/validation";
import { register } from '../../services/api'

class Registration extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            orgName:'',
            orgSite:'',
            confPassword:'',
            password:''

        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    onSubmitForm() {
        let data = {};
        //validate inputs
        if(validateEmail(this.state.email)) {
          data.email = this.state.email;
        }

        if(matchPassword(this.state.password, this.state.confPassword)) {
          data.password = this.state.password;
        }

        if(validateString(this.state.orgName)) {
          data.orgName = this.state.orgName;
        }

        if(validateWebsite(this.state.orgSite)) {
          data.orgSite = this.state.orgSite;
        }

        if(Object.keys(data).length > 3) {
          register(data)
        }
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col />
                    <Col xs={6}>
                      <h3>
                        <Badge variant="secondary">Registration</Badge>
                      </h3>
                      <Form>
                        <Form.Group>
                          <Row>
                            <Col>
                              <Form.Control type="text" placeholder="Organization Name" name="orgName" value={this.state.orgName} onChange={this.onInputchange} />
                            </Col>
                            <Col>
                              <Form.Control type="text" placeholder="Organization Website" name="orgSite" value={this.state.orgSite} onChange={this.onInputchange} />
                            </Col>
                          </Row>
                        </Form.Group>
                        <Form.Group>
                          <Row>
                            <Col>
                              <Form.Control type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onInputchange}/>
                            </Col>
                          </Row>
                        </Form.Group>
                        <Form.Group>
                          <Row>
                            <Col>
                              <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onInputchange} />
                            </Col>
                            <Col>
                              <Form.Control type="password" placeholder="Confirm Password" name="confPassword" value={this.state.confPassword} onChange={this.onInputchange} />
                            </Col>
                          </Row>
                        </Form.Group>
                        <Form.Group>
                          <Button variant="primary" onClick={this.onSubmitForm}>Register</Button>
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        )
    }
}

export default Registration