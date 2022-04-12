import {configureStore} from "@reduxjs/toolkit";
import mainReducer from "./features/main/mainSlice";
import usersReducer from "./features/main/usersSlice";


const store = configureStore(
{
    reducer:
        {
            main:mainReducer,
            users:usersReducer
        }
});

export type RootState = ReturnType<typeof store.getState>

export default store;

