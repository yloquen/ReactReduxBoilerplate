import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {fetchUsers, LoadState} from "../features/main/usersSlice";


export const Users = () =>
{
    const userStatus = useSelector((state:RootState) => state.users.status);
    const userList = useSelector((state:RootState) => state.users.list);

    let content;

    if (userStatus === LoadState.NOT_STARTED)
    {
        content = <span>Not started</span>;
    }
    else if (userStatus === LoadState.LOADED)
    {
        content = userList.map(user =>
        {
            return (<div>
                {user.name}
            </div>);
        })
    }

    const dispatch = useDispatch();

    return (<div>
        {content}
        <button
            disabled={userStatus !== LoadState.NOT_STARTED}
            onClick={() =>
            {
                dispatch(fetchUsers())
            }}
        >
            Load
        </button>
    </div>);
};

