import { Component } from "react";
import React from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import { validateCode } from "../../utility/validation";
import { verifyCode } from '../../services/api'
import { withRouter } from 'react-router-dom';

class VerifyAccount extends Component {

    constructor() {
        super()
        this.state = {
            code: ''
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
      console.log("1")
      const { history } = this.props;
      let data = {};
      //validate inputs

      if(validateCode(this.state.code)) {
          data.code = this.state.code;
      }

      const username = localStorage.getItem("username");
      if(username) {
        data.username = username;
      }

      if(Object.keys(data).length > 1) {
        verifyCode(data).then((response)=>{
          if(response.status === "ok" && history) {
            alert(response.message)
            history.push('/login');
          } else {
            alert(response.message)
          }
        });
      }
    }

    render() {
      const { history } = this.props;
        return(
            <Container>
                <Row>
                    <Col />
                    <Col xs={6}>
                      <h3>
                        <Badge variant="secondary">Verify your Account</Badge>
                      </h3>
                      <Form>
                        <Form.Group>
                          <Row>
                            <Col>
                              <Form.Control type="number" placeholder="Verification code" name="code" value={this.state.code} onChange={this.onInputchange} />
                            </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                          <Button variant="primary" onClick={this.onSubmitForm}>Verify</Button>
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        )
    }
}

export default withRouter(VerifyAccount)