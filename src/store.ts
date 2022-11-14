import {configureStore} from "@reduxjs/toolkit";
import mainReducer from "./features/main/mainSlice";
import usersReducer from "./features/users/usersSlice";
import postsReducer from "./features/posts/postsSlice";
import testReducer from "./features/test/testSlice";


const store = configureStore(
{
    reducer:
        {
            main:mainReducer,
            users:usersReducer,
            posts:postsReducer,
            test:testReducer
        }
});

export type RootState = ReturnType<typeof store.getState>

export default store;

