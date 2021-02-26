import { Component } from "react";
import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';

class Main extends Component {

    constructor() {
        super()
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>Time Keeper</h1>
                    <p>
                        TimeKeeper is one platform that will provide all the tools to manage employees.
                    </p>
                    <p> Manage employee tracking and payroll in just few clicks.</p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </Container>
        )
    }
}

export default Main
