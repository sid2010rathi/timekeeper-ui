import { Component } from "react";
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { validateEmail, validatePassword } from '../../utility/validation';
import { login } from '../../services/api'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            rememberMe: ''
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

        if(validatePassword(this.state.password)) {
            data.password = this.state.password;
        }

        if(Object.keys(data).length > 1) {
            login(data);
        }
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col />
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                 name="email" value={this.state.email} onChange={this.onInputchange} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                 name="password" value={this.state.password} onChange={this.onInputchange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me!" name="rememberMe" value={this.state.rememberMe} onChange={this.onInputchange} />
                            </Form.Group>
                            <Button variant="primary" onClick={this.onSubmitForm}>Submit</Button>
                        </Form>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        )
    }
}

export default Login