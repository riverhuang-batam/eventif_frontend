import React, {useState, useEffect} from 'react'
import {Row, Col} from 'reactstrap'
import SharedInput from '../../Shared/UIElements/SharedInput'
import SharedButton from '../../Shared/UIElements/SharedButton'
import SharedCard from '../../Shared/UIElements/SharedCard'
import SharedFormGroup from '../../Shared/UIElements/SharedFormGroup'
import './SignInForm.css'
const SignInForm = (props) =>{
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    // const handleChange = (e) => {
    //     e.target.value
    // }
    return(
        <React.Fragment>
            
            <SharedCard className="shadow container">
            <img className="sign-img mt-4 mb-4" src={require('../../assets/eventiflogo.png')} alt="eventif-img"/>
            
            <SharedInput type="email" value={data.email} className="input-style mt-2 mb-2" placeholder="email" required/>
            
            <SharedInput type="password" value={data.password} className="input-style mt-2 mb-2" placeholder="password" required/>
            
            
            <SharedButton className="btn-eventif mt-2 mb-4">Login</SharedButton>
            
            </SharedCard>
            
        </React.Fragment>

    )
}
export default SignInForm;