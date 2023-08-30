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
        }
    }
})

export const { goNext, goPrev, goSelected } = stepSlice.actions

export default stepSlice.reducer