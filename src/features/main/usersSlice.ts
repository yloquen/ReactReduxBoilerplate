import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {makeRequest} from "../../comm/Server";
import {useDispatch} from "react-redux";


export enum LoadState
{
    NOT_STARTED,
    LOADING,
    LOADED,
    ERROR
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_,thunkAPI) =>
{
    const userData = await makeRequest("users");
    thunkAPI.dispatch(setUsers(userData));
});

const userSlice = createSlice(
{
    name:'users',
    initialState:
    {
        list:[],
        status:LoadState.NOT_STARTED
    },
    reducers:
    {
        setUsers(state, action)
        {
            state.status = LoadState.LOADED;
            state.list = action.payload;
        }
    }
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;