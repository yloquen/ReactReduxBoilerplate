import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {fetchPosts} from "../features/posts/postsSlice";
import {LoadStatus} from "../enums/enums";
import {createEntityAdapter} from "@reduxjs/toolkit";
import {selectAllPosts} from "../features/posts/postsSlice";
import { likePost } from "../features/posts/postsSlice";
import React from "react";
import {Link, Outlet} from "react-router-dom";

let Post = ({post}) =>
{
    const dispatch = useDispatch();
    const postStyle = { fontSize:"1rem" };

    return (<div style={postStyle}>
        {<button onClick={()=>{ dispatch(likePost(post.id)) }}>Like {post.likes}</button>}
        <div>
            {post.id}
        </div>
        <div>
            {post.title}
        </div>
        <Link
            to={`/posts/${post.id}`}
            key={post.id}
        >
            Details
        </Link>
        <p/>
    </div>);
};

Post = React.memo(Post);

const MyContext = React.createContext(undefined);

export const Posts = () =>
{
    const dispatch = useDispatch();

    const postStatus = useSelector((state:RootState) => state.posts.status);
    const postList = useSelector(selectAllPosts);

    let content;

    if (postStatus === LoadStatus.NOT_STARTED)
    {
        content = <span>Not started</span>;
    }
    else if (postStatus === LoadStatus.LOADING)
    {
        content = <span>Loading ...</span>;
    }
    else if (postStatus === LoadStatus.LOADED)
    {
        content = postList.map((post:any) => { return <Post post={post} key={post.id}/> });
    }

    return (<div id="styleTest">
        <Outlet/>
        {content}
        <button
            disabled={postStatus !== LoadStatus.NOT_STARTED}
            onClick={() =>
            {
                dispatch(fetchPosts())
            }}
        >
            Load
        </button>
        <MyContext.Provider value={123}>
            <TestComp/>
        </MyContext.Provider>

    </div>);
};

const TestComp = () =>
{
    return <MyContext.Consumer>
        {
            value =>
                <div>
                    {value}
                </div>

        }
    </MyContext.Consumer>

}

