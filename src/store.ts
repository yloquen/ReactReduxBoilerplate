import {configureStore} from "@reduxjs/toolkit";
import mainReducer from "./features/main/mainSlice";
import usersReducer from "./features/users/usersSlice";
import postsReducer from "./features/posts/postsSlice";


const store = configureStore(
{
    reducer:
        {
            main:mainReducer,
            users:usersReducer,
            posts:postsReducer
        }
});

export type RootState = ReturnType<typeof store.getState>

export default store;

