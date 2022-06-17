import React, {CSSProperties, LegacyRef, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";
import {selectPostById} from "../features/posts/postsSlice";
import {RootState} from "../store";
import gsap from "gsap";

export const Tweens = ({}) =>
{
    const [opacity, setOpacity] = useState(0);

    const { postId } = useParams();
    const post:any = useSelector((state:RootState) => selectPostById(state, postId));

    const tween1 = () =>
    {
        const b = document.getElementById("but1");
        gsap.to(b, {duration:1, opacity:1});
    };

    const imgRef:React.RefObject<HTMLImageElement> = React.createRef();
    useEffect(() =>
    {
        gsap.to(imgRef.current, {duration:1, opacity:1});
    });

    const tweenObj = {opacity:0};
    const tween2 = () =>
    {
        gsap.to(tweenObj, {duration:1, opacity:1, onUpdate:() => {setOpacity(tweenObj.opacity)}});
    };

    const imgRef3:React.RefObject<HTMLImageElement> = React.createRef();
    const tween3 = () =>
    {
        imgRef3.current.style.opacity = "1";
        imgRef3.current.style.transition = "opacity 1s";
    };

    const imgRef4:React.RefObject<HTMLImageElement> = React.createRef();
    const tween4 = () =>
    {
        imgRef4.current.style.animationName = "example";
        imgRef4.current.style.animationDuration = "1s";
    };




    return (<div>
        <span>Test various tween types</span>

        <div>
            <div>CSS Animation</div>
            <img style={{opacity:0}} ref={imgRef4} src="./img/index.jpg"/>
            <button onClick={tween4}>Tween</button>
        </div>

        <div>
            <div>CSS Transition</div>
            <img style={{opacity:0}} ref={imgRef3} src="./img/index.jpg"/>
            <button onClick={tween3}>Tween</button>
        </div>

        <div>
            <div>Using getElementById</div>
            <img id="but1" style={{opacity:0}} src="./img/index.jpg"/>
            <button style={{display:"block"}} onClick={tween1}>Tween</button>
        </div>

        <div>
            <div>Using ref</div>
            <img ref={imgRef} style={{opacity:0}} src="./img/index.jpg"/>
            <button style={{display:"block"}}>Tween</button>
        </div>

        <div>
            <div>Using state + tween</div>
            <img style={{opacity:opacity}} src="./img/index.jpg"/>
            <button style={{display:"block"}} onClick={tween2}>Tween</button>
        </div>

    </div>);
};

