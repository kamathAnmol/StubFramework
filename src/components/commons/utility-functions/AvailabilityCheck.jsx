import React from 'react'
import { useState } from 'react'
import { Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap'

function AvailabilityCheck({sendF,...props}) {
    const [fieldValue, setFieldValue] = useState('')
    const [valueEntered, setValueEntered] = useState(false);
    const [exists, setExists] = useState(false)
    const setValue = (e) => {
        setFieldValue(e.target.value)
        setValueEntered(false)

        if (props.reset)
            props.reset()
    }

    const fetchAPI = () => {
        sendF('userName', 'domain', 'collection', 'title', 'requestContext')
        setExists(false);
        setValueEntered(true);
        props.readValue(fieldValue)
    }
    return (
        <FormGroup style={{paddingTop:10}}>
            <FormLabel className='pull-left form-label-text'>
                {props.fieldLabel}
                {/* <span className="text-danger">*</span> */}
            </FormLabel>
            <FormControl style={{fontSize:15}}
                className='mb'
                placeholder={props.fieldPlaceholder}
                type="text"
                value={fieldValue}
                onChange={setValue}
            />
            {
                valueEntered &&
                <div>
                    {
                        exists ?
                            <div className="text-danger">
                                This {props.fieldLabel.toLowerCase()} already exists
                            </div>
                            :
                            <div className="text-success">
                                {fieldValue} available
                            </div>
                    }
                </div>
            }{ }
            {
                fieldValue &&
                <Button
                    className="btn-success mb"
                    style={{ marginTop: '10px' }}
                    onClick={fetchAPI}
                    // onClick={sendF('userName', 'domain', 'collection', 'title', 'requestContext')}
                >
                    Check Availability
                </Button>
            }
        </FormGroup>
    )
}

export default AvailabilityCheck