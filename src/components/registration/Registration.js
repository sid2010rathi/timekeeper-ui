import { Component } from "react";
import React from 'react';
import '../../css/style.css';

import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import { validateEmail, matchPassword, validateString, validateWebsite } from "../../utility/validation";
import { register } from '../../services/api';
import { getOrganization } from '../../services/api';
import { withRouter } from 'react-router-dom';

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

  componentDidMount() {
    getOrganization()
    .then(res => {
        this.setState({ 
            orgName: res.organizationName,
            orgSite: res.organizationWebsite,
            email: res.username 
          });
    });
}
    
    onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    onSubmitForm() {
      const { history } = this.props;
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
        register(data).then((response)=>{
          console.log(response.data.username)
          if(response.status === "ok" && history) {
            localStorage.setItem("username", response.data.username);
            history.push('/verify');
          } else {
            alert("Try Again")
          }
        });
      }
    }

    render() {
      const { history } = this.props;
        return(
            <Container className="organization_container">
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

export default withRouter(Registration)