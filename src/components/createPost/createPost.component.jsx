import { useState } from "react";
import {  useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import { db } from "../../firebase/firebase.utils";
import { collection, addDoc } from "firebase/firestore";
import { storage } from "../../firebase/firebase.utils";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {v4} from 'uuid';

import './createPost.styles.css';

const defaultFormFields={
    type:'',
    title:'',
    details:''
}

const PostCreation=()=>{
    
    const {currentUser}=useContext(UserContext);
    const [formFields, setFormFields]=useState(defaultFormFields);
    const {type,title,details}=formFields;
    const [imageUpload, setImageUpload]=useState(null);
    
    const handleChange=(event)=>{
        const {name, value}=event.target ;
        setFormFields({...formFields,[name]: value})
    };

    const resetFormFields=()=>{
        setFormFields(defaultFormFields);
        setImageUpload('');
    };

    const addToFirestore=async(downloadURL)=>{
        await addDoc(collection(db, "posts"),{
            uid:currentUser.uid,
            type:type,
            title:title,
            details:details,
            imgurl:downloadURL
        });
        resetFormFields();
    }

    const uploadImage=()=>{
        if(imageUpload==null) return;
        const imageRef=ref(storage,`postImage/${imageUpload.name + v4()}`);
        const uploadTask = uploadBytesResumable(imageRef, imageUpload);
        uploadTask.on('state_changed', 
          (snapshot) => { 
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                 case 'paused':
                     console.log('Upload is paused');
                     break;
                 case 'running':
                     console.log('Upload is running');
                     break;
                 default: console.log('Stopped');
            }
        }, 
        (error) => {
               // Handle unsuccessful uploads
               console.log('Error',error);
            }, 
        () => {
             // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                addToFirestore(downloadURL);
           });
         }
        );
      }

    const handleSubmit=async(event)=>{
        event.preventDefault();
        imageUpload===null?(
            addToFirestore('')
        ):(
            uploadImage() 
        )
    };

    return(
        <div className="createPost-container">
        <div className="title-container"><h2>Enter the post details here</h2></div>
        <div className="post-container">
           <form onSubmit={handleSubmit}>
           <input className="type" placeholder="Type: job, news, giving or other" type="text" required aria-label="type" onChange={handleChange} name='type' value={type} />
           <input className="title" placeholder="Title" type="text" required aria-label="title" onChange={handleChange} name='title' value={title} />
           <textarea className="entryField" rows='20' placeholder="Post details" aria-label="details" type="text" required onChange={handleChange} name='details' value={details}/>
           <input className="infopic" type="file" onChange={(event)=>{setImageUpload(event.target.files[0]);}} />
           <button className="post-button" type="submit">Post</button>
           </form>
        
        </div>
        </div>
    )
}
export default PostCreation;