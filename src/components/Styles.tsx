import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {fetchUsers} from "../features/users/usersSlice";
import {LoadStatus} from "../enums/enums";
import "./styles.scss";

export const Styles = () =>
{
    const dispatch = useDispatch();

    return (<div id="styleTest">
        <span>TEST</span>
    </div>);
};

