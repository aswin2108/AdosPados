import {  useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import './postBar.styles.css';

const PostBar=()=>{
    const {currentUser}=useContext(UserContext);
    return(
        <div>
        {
            currentUser?(
                <div className="post-bar">
                   <div>
                     <Link className="plink" to="/create-post">Create-Post</Link>
                   </div>
                </div>
            ):(<div>SignIn to create a post</div>)
        }
        </div>
    )
}

export default PostBar;