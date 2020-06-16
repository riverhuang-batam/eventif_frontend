import React from "react";
import SharedForm from "../../Shared/UIElements/SharedForm";
import SignInForm from "../components/SignInForm";
import { Container, Row, Col } from "reactstrap";
import './UserSignIn.css'
import axios from "axios";
const UserSignIn = (props) => {
  // console.log(props)
  const SignIn = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/signin`);
  };
  return (
    <SharedForm submit={SignIn}>
      <Row>
        <Col
          sm="12"
          md={{
            size: 4,
            offset: 4,
          }}
        >
          <Container className="pd-top">
            <SignInForm />
          </Container>
        </Col>
      </Row>
    </SharedForm>
  );
};
export default UserSignIn;
