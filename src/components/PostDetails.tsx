import React from "react";
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";
import {selectPostById} from "../features/posts/postsSlice";
import {RootState} from "../store";

export const PostDetails = ({}) =>
{
    const { postId } = useParams();
    const post:any = useSelector((state:RootState) => selectPostById(state, postId));

    return (<div>
        <h1>{post.title}</h1>
        <h2>{post.body}</h2>
    </div>);
};