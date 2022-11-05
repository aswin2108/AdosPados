import React, {useState, useEffect} from "react";

import { db } from "../../firebase/firebase.utils";
import { collection, getDocs} from "firebase/firestore";

import Card from "../card/card.component";

const PostList=()=>{
    const [allPosts, setAllPost]=useState([]);

    const loadPost=()=>{
        (async()=>{
            const colRef = collection(db, "posts")
            const snapshots=await getDocs(colRef);
            const docs=snapshots.docs.map(doc=>{
            const data=doc.data()
            data.id=doc.id
            return data  
            })
          setAllPost(docs);
        })()
    }

    useEffect(()=>{
        loadPost();
    }, [allPosts]);

    return(
        <div>
           <div className="entry-list">
           {
             allPosts.map(indDoc=>(
                <Card key={indDoc.id} indDoc={indDoc} />
             ))
           }
           </div>
        </div>
    );
}
export default PostList;