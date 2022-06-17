import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {fetchUsers} from "../features/users/usersSlice";
import {LoadStatus} from "../enums/enums";


export const Users = () =>
{
    const userStatus = useSelector((state:RootState) => state.users.status);
    const userList = useSelector((state:RootState) => state.users.list);

    let content;

    if (userStatus === LoadStatus.NOT_STARTED)
    {
        content = <span>Not started</span>;
    }
    else if (userStatus === LoadStatus.LOADING)
    {
        content = <span>Loading ...</span>;
    }
    else if (userStatus === LoadStatus.LOADED)
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
            disabled={userStatus !== LoadStatus.NOT_STARTED}
            onClick={() =>
            {
                dispatch(fetchUsers())
            }}
        >
            Load
        </button>
    </div>);
};

