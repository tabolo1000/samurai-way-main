import React, {useRef} from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    // const newPostElement = React.createRef();
    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostEl.current !== null) {
            alert(newPostEl.current.value)
        }
    }

    return (
        <div>
            <div>
                <h3>My posts</h3>
                <textarea ref = {newPostEl} name="post" id="12" cols={40} rows={10}></textarea>
                <button onClick = {() =>{addPost()}}>Send</button>
            </div>
            <Post />
        </div>
    );
};