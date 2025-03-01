import React from 'react'
import {Button, Col, Form, Row } from 'react-bootstrap';
import "./MessageForm.css";

function MessageForm () {
  function handleSubmit (e) {
    e.preventDefault();
  }
  return (
    <div>
      <div className='message-output'></div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={11}>
              <Form.Group>
                <Form.Control type = "text" placeholder='Your message'></Form.Control>
              </Form.Group>
            </Col>
            <Col md={1}>
              <Button variant="primary" type ="submit" style={{width:'100%', backgroundColor: 'blue'}}>
                <i className='fas fa-light fa-paper-plane'></i>
              </Button>
            </Col>
          </Row>
        </Form>
      
    </div>
  )
}

export default MessageForm;