import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Label, Row } from 'reactstrap'
import { updateStep } from '../app/stepSlice'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function Step2() {

  const dispatch = useDispatch()
  const { email, phone } = useSelector(store => store.step.step2)

  return (
    <div className='step-item'>
      <Row>
        <div className="col-md-6 mb-4">
          <Label>Email</Label>
          <Input
            type='email'
            value={email}
            onChange={e => dispatch(updateStep({
              stateName: "step2",
              field: "email",
              value: e.target.value
            }))}
          />
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-group">
            <Label>Phone</Label>
            <PhoneInput
              placeholder="Enter phone number"
              value={phone}
              className='reactPhoneInput'
              onChange={phoneNumber => dispatch(updateStep({
                stateName: "step2",
                field: "phone",
                value: phoneNumber
              }))}
            />
          </div>
        </div>
      </Row>
    </div>
  )
}

export default Step2