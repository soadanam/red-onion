import React from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import './Top.css';

const Top = () => {
    return (
        <Container fluid className='main-div'>

            <div>
                <h1>Best food waiting for your belly!</h1>

            <div className="search-div">
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Search food items"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        className='top-input'
                    />
                    <Button className='btn-common-style top-search' variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>
            </div>


        </Container>
    );
};

export default Top;