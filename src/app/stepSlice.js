import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentStep: 1,
    list: [
        {
            index: 1,
            text: "Step 1",
        }, {
            index: 2,
            text: "Step 2",
        }, {
            index: 3,
            text: "Step 3",
        }, {
            index: 4,
            text: "Step 4",
        }
    ],
    step1: {
        name: "",
        surname: "",
    },
    step2: {
        email: "",
        phone: "",
    },
    step3: {
        start_date: "",
        end_date: "",
    },
}

export const stepSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        goNext: (state) => {
            state.currentStep += 1
        },
        goPrev: (state) => {
            state.currentStep -= 1
        },
        goSelected: (state, action) => {
            state.currentStep = action.payload
        },
        updateStep: (state, action) => {
            console.log("payloadd", action.payload);
            const { stateName, field, value } = action.payload
            // state.step1.name = value
            // state['step1']['name']
            // state[action.payload.stateName][action.payload.field] = action.payload.value
            state[stateName][field] = value
        },
    }
})

export const { goNext, goPrev, goSelected, updateStep } = stepSlice.actions

export default stepSlice.reducer