import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { goNext, goPrev } from '../app/stepSlice'

function StepController() {

    const dispatch = useDispatch()
    const { currentStep } = useSelector(store => store.step)

    const handlePrev = () => {
        if (currentStep === 1) return
        dispatch(goPrev())
    }

    const handleNext = () => {
        if (currentStep === 4) {
            // submit data
            alert("SUBMIT DATA");
            return
        }

        dispatch(goNext())
    }

    return (
        <div
            className={`step-controller d-flex ${currentStep > 1 ? "justify-content-between" : "justify-content-end"}`}
        >
            {
                currentStep !== 1 &&
                <Button
                    onClick={handlePrev}
                    style={{
                        backgroundColor: "#FAF1E4",
                        color: "#435334",
                    }}
                >
                    Previous
                </Button>
            }
            <Button
                onClick={handleNext}
                style={{
                    backgroundColor: "#435334"
                }}
            >
                {currentStep === 4 ? 'Complete' : "Next"}
            </Button>
        </div>
    )
}

export default StepController