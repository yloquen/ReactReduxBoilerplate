import {Link} from "react-router-dom";
import {CSSProperties} from "react";


export const Nav = () =>
{
    const linkStyle:CSSProperties =
    {
        padding:"15px"
    };

    return (<div>
        <nav>
            <Link style={linkStyle} to="/">Root</Link>
            <Link style={linkStyle}  to="/users">Users</Link>
        </nav>
    </div>)
};

