import React from 'react'
import SharedForm from '../../Shared/UIElements/SharedForm'
import SignUpForm from '../components/SignUpForm'
import './UserSignUp.css'
import {Container, Row, Col} from 'reactstrap'
const UserSignUp = (props) => {
    return(
        <SharedForm submit="">
             <Row>
                    
                    <Col
                        sm="12"
                        md={{
                        size: 4,
                        offset: 4
                    }}
                    >
                        <Container className="pd-top">
            <SignUpForm/>
            </Container>
            </Col>
            </Row>
        </SharedForm>
    )
}
export default UserSignUp;