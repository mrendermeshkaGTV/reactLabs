import {createSlice} from "@reduxjs/toolkit";
const defaultState = {
    counterValue: 20,
    lesson: {
        lections: 10,
        topic: 'Redux Toolkit'
    }
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: defaultState,
    reducers: {
        increaseCounterActionHandler: (state, action) => {
            state.counterValue += Number(action.payload);
        },
        decreaseCounterActionHandler: (state, action) => {
            state.counterValue -= Number(action.payload);
        }
    }
})
export const {increaseCounterActionHandler, decreaseCounterActionHandler} = counterSlice.actions;
export default counterSlice.reducer;