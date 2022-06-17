import {Link} from "react-router-dom";
import {CSSProperties} from "react";


export const Nav = () =>
{
    const linkStyle:CSSProperties =
    {
        padding:"15px",
        fontSize:"1rem"
    };

    return (<div>
        <nav>
            <Link style={linkStyle} to="/">Root</Link>
            <Link style={linkStyle}  to="/users">Users</Link>
            <Link style={linkStyle}  to="/posts">Posts</Link>
            <Link style={linkStyle}  to="/tweens">Tweens</Link>
            <Link style={linkStyle}  to="/styles">Styles</Link>
        </nav>
    </div>)
};

