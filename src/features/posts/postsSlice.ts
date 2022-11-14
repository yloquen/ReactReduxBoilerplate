import {createAsyncThunk, createEntityAdapter, createSlice, nanoid} from "@reduxjs/toolkit";
import {makeRequest} from "../../comm/Server";
import {LoadStatus} from "../../enums/enums";
import {RootState} from "../../store";

let uidCounter = 0;

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () =>
{
    return await makeRequest("posts");
});


const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState({status:LoadStatus.NOT_STARTED});

export const
{
    selectAll : selectAllPosts,
    selectById : selectPostById
}
    = postsAdapter.getSelectors((state:RootState) => state.posts);

const postsSlice = createSlice(
{
    name:'posts',
    initialState:initialState,
    reducers:
    {
        setStatus(state, action:{payload:LoadStatus})
        {
            state.status = action.payload;
        },
        likePost(state, action)
        {
            const post:any = state.entities[action.payload];
            post.likes++;
        }
    },
    extraReducers(builder)
        {
            builder
                .addCase(fetchPosts.pending, (state, action) =>
                {
                    state.status = LoadStatus.LOADING;
                })
                .addCase(fetchPosts.fulfilled, (state:any, action) =>
                {
                    state.status = LoadStatus.LOADED;

                    const posts = action.payload as any[];
                    posts.forEach(post => { post.id = uidCounter++; post.likes = 0;});

                    postsAdapter.upsertMany(state, action.payload as any);
                })

        }

});


export const { setStatus, likePost } = postsSlice.actions;

export default postsSlice.reducer;