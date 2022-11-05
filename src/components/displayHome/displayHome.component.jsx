
import {  useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import { signInWithGooglePopup} from "../../firebase/firebase.utils";

import './displayHome.styles.css';


const SignIn=()=>{
    const signInWithGoogle = async()=>{
        await signInWithGooglePopup();
    }
    const {currentUser}=useContext(UserContext);
    return(
        <div className="home-container">
        <div>
        {
            currentUser?(
                <div>
                 <h2 className="sign-up-title">Explore your AdosPados</h2>
                 <h2 className="sign-up-title">in your fingertips</h2>
               </div>     
            ):(<div> 
                <h2 className="sign-up-title">Sign In to explore</h2>
                <button type="button" className="sign-up-button" onClick={signInWithGoogle}>Google Sign In</button>   
            </div>)
        }
       </div>
        <img src={require("./../../assets/neighbourhood.png")} className="homeImg" alt="homepage img"/>
        </div>
    );

    
}
export default SignIn;