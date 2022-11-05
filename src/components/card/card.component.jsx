import React from "react";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";

import './card.styles.css'; 

const Card=(props)=>{
    const {currentUser}=useContext(UserContext);
    var cardClass='';
    const deleteEntry=async(event)=>{
        event.preventDefault();
        await deleteDoc(doc(db, "posts", props.indDoc.id));
    }
    if(props.indDoc.type==="news"){
        cardClass="news-card"
    }else if(props.indDoc.type==="job"){
        cardClass="job-card";
    }else if(props.indDoc.type==="giving"){
        cardClass="giving-card";
    }else{
        cardClass="other-card";
    }
    return(
    <div className={cardClass}>
      <div className="post-card-header">
       <h3>{props.indDoc.title}</h3>
       {
        currentUser.uid===props.indDoc.uid?(
            <button className="delete-post-btn" onClick={deleteEntry}>Delete</button>
        ):(
            <div></div>
        )
       }
       
       </div>
       <p>{props.indDoc.details}</p>
       {
        props.indDoc.imgurl?(
            <img className="d-img" alt="Memory-img" src={props.indDoc.imgurl}/>
        ):(
            <p></p>
        )
       }
    </div>
    )
}

export default Card;