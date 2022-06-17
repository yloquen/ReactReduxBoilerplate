import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {makeRequest} from "../../comm/Server";
import {useDispatch} from "react-redux";
import {LoadStatus} from "../../enums/enums";




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
        status:LoadStatus.NOT_STARTED
    },
    reducers:
    {
        setStatus(state, action:{payload:LoadStatus})
        {
            state.status = action.payload;
        },

        setUsers(state, action:{payload:any})
        {
            state.status = LoadStatus.LOADED;
            state.list = action.payload;
        }
    }
});

export const { setStatus, setUsers } = userSlice.actions;

export default userSlice.reducer;