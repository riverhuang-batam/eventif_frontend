import React from 'react'
import SharedForm from '../../Shared/UIElements/SharedForm'
import SharedFormGroup from '../../Shared/UIElements/SharedFormGroup'
import SharedInput from '../../Shared/UIElements/SharedInput'
import SharedCard from '../../Shared/UIElements/SharedCard'
import './CreateEvent.css'
const CreateEvent = () => {
    const createEvent = (e) =>{
        e.preventDefault()
    }
    return(
        <React.Fragment>
            <div className="container pd-top-form">
            <SharedCard className="container">
            <SharedForm submit={createEvent}>
                <SharedFormGroup>
                <SharedInput type='text' className="" placeholder="Your Event Title" required/>
                </SharedFormGroup>
                <SharedFormGroup>
                <SharedInput type='text' className="" placeholder="Your Event Category" required/>
                </SharedFormGroup>
                <SharedFormGroup>
                <SharedInput type='text' className="" placeholder="do people get Certificate when they join your event?" required/>
                </SharedFormGroup>
                <SharedFormGroup>
                    <SharedInput type='text' className="" placeholder="Location" required/>
                    </SharedFormGroup>
                <SharedFormGroup>
                    <SharedInput type='number' className="" placeholder="Ticket Quantity" required/>
                    </SharedFormGroup>
                    <SharedFormGroup>
                    <SharedInput type='number' className="" placeholder="Ticket Quantity" required/>
                    </SharedFormGroup>
                    
                    <SharedFormGroup>
                    <SharedInput type='text' className="" placeholder="price" required/>
                    </SharedFormGroup>
                    <SharedFormGroup>
                    <input type='file' className="mt-4"  required/>
                    </SharedFormGroup>
                    <SharedFormGroup>
                    <SharedInput type='text' className="" placeholder="OrganizerName" required/>
                    </SharedFormGroup>
                    <SharedFormGroup>
                    <SharedInput type='text' className="" placeholder="Your Event Description" required/>
                    </SharedFormGroup>
            </SharedForm>
            </SharedCard>
            </div>
        </React.Fragment>
    )
}
export default CreateEvent;