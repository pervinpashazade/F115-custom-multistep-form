import React from 'react'
import NavItem from './NavItem'
import { useDispatch, useSelector } from 'react-redux'
import { goSelected } from '../app/stepSlice'

function StepNavigation() {

    const dispatch = useDispatch()
    const { currentStep, list } = useSelector(store => store.step)

    const handleOnClick = selectedStep => {
        dispatch(goSelected(selectedStep))
    }

    return (
        <div className='step-navigation'>
            {
                list.map(item => (
                    <NavItem
                        text={item.text}
                        isActive={currentStep === item.index}
                        onClick={() => handleOnClick(item.index)}
                    />
                ))
            }
        </div>
    )
}

export default StepNavigation