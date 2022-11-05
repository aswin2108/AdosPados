import React from "react";
import { useState } from "react";

import { db } from "../../firebase/firebase.utils";
import { doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import './userDetails.styles.css';

const defaultFormFields={
    associationId:'',
    houseNo:''
}

const UserDetails=()=>{
    const navigate=useNavigate();
    const {currentUser}=useContext(UserContext);

    const [formFields, setFormFields]=useState(defaultFormFields)
    const {associationId, houseNo}=formFields;

    const handleChange=(event)=>{
        const {name, value}=event.target ;
        setFormFields({...formFields,[name]: value})
    };
    const resetFormFields=()=>{
        setFormFields(defaultFormFields);
    };
    const handleSubmit=async(event)=>{
        event.preventDefault();
        storeUserDetails();
    };
    const storeUserDetails=async()=>{
        const userUpdateRef=doc(db, "users", currentUser.uid);
        await updateDoc(userUpdateRef,{
            associationId: associationId,
            houseNo: houseNo
        });
        resetFormFields();
        navigate('/posts');
    }

    return(
        <div className="userFormContainer">
           <div className="userFormTitle"><h2>Enter your details</h2></div>
           <div>
             <form className="userForm" onSubmit={handleSubmit}>
             <input className="Aid" placeholder="Association Number" type="text" required aria-label="associationId" onChange={handleChange} name='associationId' value={associationId} />
             <input className="Hno" placeholder="House Number" type="text" required aria-label="houseNo" onChange={handleChange} name='houseNo' value={houseNo} />
             <button className="userButton" type="submit">Save</button>
             </form>
           </div>
        </div>
    )
}

export default UserDetails;