import React from 'react'
import SharedInput from '../../Shared/UIElements/SharedInput'
import SharedCard from '../../Shared/UIElements/SharedCard'
import SharedButton from '../../Shared/UIElements/SharedButton'
import './SignUpForm.css'
const SignUpForm = () =>{
    return(
        <React.Fragment>
            
            <SharedCard className="shadow container">
            <img className="sign-img mt-4 mb-4" src={require('../../assets/eventiflogo.png')} alt="eventif-img"/>
            <SharedInput type="email" className="mt-2 mb-2" placeholder="username" required/>
            <SharedInput type="email" className="mt-2 mb-2" placeholder="email" required/>
            <SharedInput type="password" className="mt-2 mb-2" placeholder="password" required/>
            <SharedInput type="text" className="mt-2 mb-2" placeholder="phoneNumber" required/>
            <SharedButton className="btn-eventif mt-2 mb-4">Sign Up</SharedButton>
            </SharedCard>
            
            </React.Fragment>
    )
}
export default SignUpForm;