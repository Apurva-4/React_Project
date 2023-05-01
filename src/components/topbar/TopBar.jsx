import "./topbar.css";
import { Link } from "react-router-dom";


export default function TopBar(){
    return(
        <div className='top'>
            <div className="topLeft">
                <i className=" topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
                </div>
            <div className="topCenter">
            <ul className="topList">

                <li className="topListItem"><Link to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link></li>
                <li className="topListItem"><Link to="/contact" style={{textDecoration:"none", color:"inherit"}}>CONTACT</Link></li>
                <li className="topListItem"><Link to="/write" style={{textDecoration:"none", color:"inherit"}}>WRITE</Link></li>
                <li className="topListItem"><Link to="/dashboard" style={{textDecoration:"none", color:"inherit"}}>DASHBOARD</Link></li>
                <li className="topListItem"><Link to="/settings" style={{textDecoration:"none", color:"inherit"}}>SETTINGS</Link></li>
                <li className="topListItem"><Link to="/login" style={{textDecoration:"none", color:"inherit"}}>LOGIN</Link></li>
            </ul>
            </div>
            <div className="topRight">
            <img className="topImg" src={process.env.PUBLIC_URL + "images/logo.jpg"} alt="logo"/>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}