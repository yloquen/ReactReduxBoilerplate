import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {changeCounter} from "../features/main/mainSlice";
import {useState} from "react";

export const Counter = () =>
{
    const dispatch = useDispatch();

    const [modVal, setModVal] = useState(0);

    const butClickHandler = () => { dispatch(changeCounter(modVal))};

    const counterValueSelector = useSelector(((state:RootState) => state.main.counter));
    return (<div>
        <span>{counterValueSelector}</span>
        <button onClick={butClickHandler}>Add to counter</button>
        <input type="text" value={modVal} onChange={e =>
        {
            const newVal = Number(e.target.value);
            if (!isNaN(newVal))
            {
                setModVal(newVal);
            }
        }}/>
    </div>)
};

