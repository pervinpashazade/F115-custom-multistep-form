import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Label, Row } from 'reactstrap'
import { goNext, updateStep } from '../app/stepSlice'

function Step1() {

    const dispatch = useDispatch()
    const { name, surname } = useSelector(store => store.step.step1)

    // dispatch => action => reducer => updating state

    const onKeyDown = (e) => {
        if (e.key === "Tab") {
            e.preventDefault();
            console.log("Tab");
        }
    };

    return (
        <div className='step-item'>
            <Row>
                <div className="col-md-6 mb-4">
                    <Label>Name</Label>
                    <Input
                        value={name}
                        onChange={e => dispatch(updateStep({
                            stateName: "step1",
                            field: "name",
                            value: e.target.value
                        }))}
                    />
                </div>
                <div className="col-md-6 mb-4">
                    <Label>Surname</Label>
                    <Input
                        value={surname}
                        onChange={e => dispatch(updateStep({
                            stateName: "step1",
                            field: "surname",
                            value: e.target.value
                        }))}
                        onKeyDown={e => {
                            if (e.key === "Tab") {
                                dispatch(goNext())
                            }
                        }}
                    />
                </div>
            </Row>
        </div>
    )
}

export default Step1