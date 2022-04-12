import {createSlice} from "@reduxjs/toolkit";


const mainSlice = createSlice(
{
    name:'main',
    initialState:
    {
        counter:0
    },
    reducers:
    {
        changeCounter(state, action)
        {
            state.counter += action.payload;
        },

        resetCounter(state, action)
        {
            state.counter = 0;
        }
    }
});

export const { changeCounter } = mainSlice.actions;

export default mainSlice.reducer;