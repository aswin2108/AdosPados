import {  useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../firebase/firebase.utils";

import './navbar.styles.css';

const Header=()=>{
    const {currentUser}=useContext(UserContext);
    return(
        <div className="header">
        <Link className="logo-link" to='/'>
          <h1 className="site-name">AdosPados</h1>
        </Link>
        {
            currentUser?(
                <div className="user-link">
                <div>
                <Link className="shop-link" to="/shop">SHOP</Link>
                </div>
                <div>
                <Link className="post-link" to="/posts">POSTS</Link>
                </div>
                <div>
                <span className="signout-link" onClick={signOutUser}>SIGN OUT</span>
                </div>
                </div>
            ):(<div></div>)
        }
        </div>
    )
}

export default Header;