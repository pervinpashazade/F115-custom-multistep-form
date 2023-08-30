import React from 'react'
import StepNavigation from './StepNavigation'
import StepController from './StepController'
import Step1 from './Step1'
import Step2 from './Step2'
import { useSelector } from 'react-redux'
import Step3 from './Step3'
import Step4 from './Step4'

function Layout() {

    const { currentStep } = useSelector(store => store.step)

    const renderCurrentStep = () => {
        if (currentStep === 1) {
            return <Step1 />
        } else if (currentStep === 2) {
            return <Step2 />
        } else if (currentStep === 3) {
            return <Step3 />
        } else {
            return <Step4 />
        }
    }

    return (
        <div className='layout'>
            <StepNavigation />
            {renderCurrentStep()}
            {/* {
                currentStep === 1 ?
                    <Step1 /> :
                    currentStep === 2 ? <Step2 /> :
                        currentStep === 3 ? <Step3 /> :
                            <Step4 />
            } */}
            <StepController />
        </div>
    )
}

export default Layout