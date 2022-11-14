import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {makeRequest} from "../../comm/Server";
import {LoadStatus} from "../../enums/enums";

export const fetchTest = createAsyncThunk("test/fetchTest", () =>
{
    return makeRequest("users");
});

const testSlice = createSlice(
    {
        name:'test',
        initialState:
        {
            status:LoadStatus.NOT_STARTED,
            data:[]
        },
        reducers:
        {

        },
        extraReducers(builder)
        {
            builder
                .addCase(fetchTest.pending, (state, action) =>
                {
                    state.status = LoadStatus.LOADING;
                })
                .addCase(fetchTest.fulfilled, (state, action) =>
                {
                    state.status = LoadStatus.LOADED;
                    state.data = action.payload as any[];
                })
        }
    });


export default testSlice.reducer;