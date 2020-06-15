import React from 'react'
import SharedForm from '../../Shared/UIElements/SharedForm'
import SharedFormGroup from '../../Shared/UIElements/SharedFormGroup'
import SharedInput from '../../Shared/UIElements/SharedInput'
const CreateEvent = () => {
    const createEvent = (e) =>{
        e.preventDefault()
    }
    return(
        <React.Fragment>
            <SharedForm submit={createEvent}>
                <SharedFormGroup>
                <SharedInput type='text' className="" placeholder="Title" required/>
                <SharedInput type='text' className="" placeholder="Category" required/>
                <SharedInput type='text' className="" placeholder="Certificated" required/>
                    <SharedInput type='email' className="" placeholder="Email" required/>
                    <SharedInput type='text' className="" placeholder="Location" required/>
                    <SharedInput type='text' className="" required/>
                    <SharedInput type='text' className="" placeholder="Location" required/>
                </SharedFormGroup>
            </SharedForm>
        </React.Fragment>
    )
}
export default CreateEvent;