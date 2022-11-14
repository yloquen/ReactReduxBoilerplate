import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {fetchTest} from "../features/test/testSlice";
import {CSSProperties} from "react";
import "../../static/css/test.css";

export default () =>
{
    const test = useSelector((state:RootState) => state.test);
    const dispatch = useDispatch();

    const users = test.data.map(d => <div>{d.name}</div>);

    return <div id="test_container">
        <button onClick={ () => { dispatch(fetchTest()) } }>
            LOAD
        </button>
        {test.status}
        {users}
    </div>
}