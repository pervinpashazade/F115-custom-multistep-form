import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Label, Row } from 'reactstrap'
import { updateStep } from '../app/stepSlice'

function Step3() {

    const dispatch = useDispatch()
    const { start_date, end_date } = useSelector(store => store.step.step3)


    return (
        <div className='step-item'>
            <Row>
                <div className="col-md-6 mb-4">
                    <Label>Start date</Label>
                    <Input
                        type='date'
                        value={start_date}
                        onChange={e => dispatch(updateStep({
                            stateName: "step3",
                            field: "start_date",
                            value: e.target.value
                        }))}
                    />
                </div>
                <div className="col-md-6 mb-4">
                    <Label>End date</Label>
                    <Input
                        type='date'
                        value={end_date}
                        onChange={e => dispatch(updateStep({
                            stateName: "step3",
                            field: "end_date",
                            value: e.target.value
                        }))}
                    />
                </div>
            </Row>
        </div>
    )
}

export default Step3