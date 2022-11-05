import React, {useState, useEffect} from "react";

import {  useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { db } from "../../firebase/firebase.utils";
import { doc, getDocs} from "firebase/firestore";

const PostList=()=>{
    const {currentUser}=useContext(UserContext);
    console.log(currentUser);
    // const [setuserDocd,Docc]=useState('');
    // const loadDetails=async()=>{
    //     const userDocRef=doc(db, "users", currentUser.uid)
    //     const userDocSnap= await getDocs(userDocRef)
    //         .then(console.log(userDocRef))
    //     if(userDocSnap.exists())
    //         console.log(userDocSnap);
    //     else 
    //       console.log("sorry");
    // }
    // useEffect(()=>{
    //     loadDetails();
    // },[currentUser]);

    return(
        <div><button>hii</button></div>
    );
}
export default PostList;