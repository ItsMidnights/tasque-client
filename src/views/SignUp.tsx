import React from "react";
import { Container, Row, Form, Col } from "react-bootstrap";
import { withFormik } from "formik";

export const SignUp = () => {
  return (
    <>
      <Container>
        <Form>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="John" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Doe" />
            </Form.Group>
          </Row>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="john@doe.com" />
          </Form.Group>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </>
  );
};
