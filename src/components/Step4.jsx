import React from 'react'
import { useSelector } from 'react-redux'
import { Row } from 'reactstrap'
import moment from 'moment'

function Step4() {

    const {
        step1,
        step2,
        step3,
    } = useSelector(store => store.step)

    return (
        <div className='step-item'>
            <Row>
                <div className="col-md-12">
                    <p>Name: {step1.name}</p>
                    <p>Surname: {step1.surname}</p>
                    <p>Email: {step2.email}</p>
                    <p>Phone: {step2.phone}</p>
                    <p>Start date: {moment(step3.start_date).format("DD-MM-YYYY")}</p>
                    <p>End date: {moment(step3.end_date).format("DD-MM-YYYY")}</p>
                </div>
            </Row>
        </div>
    )
}

export default Step4