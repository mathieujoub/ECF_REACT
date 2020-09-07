import React, { Component } from 'react';
import {Form, Button, Container, Row, Col} from "react-bootstrap";



class SearchFormul extends Component {
    render() {
        return ( 
            <section>
                <h1>MusicApp</h1>
                <Form>
                    <Container>
                        <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                            <Row>
                                <Col>
                                    <Form.Control placeholder="Artist/Album/Title" disabled />
                                </Col>
                                <Col md="auto">
                                    <Form.Label>
                                        Search by:
                                    </Form.Label>
                                    <Form.Control as="select" size="sm" custom>
                                        <option>All</option>
                                        <option>Artist</option>
                                        <option>Title</option>
                                        <option>Album</option>
                                    </Form.Control>
                                </Col>
                                <Col xs lg="2">
                                    <Button type="submit">Search</Button>   
                                </Col>
                            </Row>
                        </Form.Group>
                    </Container>
                </Form>       
            </section>
            
            
        );
    }
}


export default SearchFormul;