import React, {useRef} from 'react';
import {Post} from "./Post/Post";
import {PostProfileDataType, profileDataType} from "../../../../App";

interface propsType {
    postData: PostProfileDataType;
    addPost: (message: string) => void;
    onPostChange: (message: string) => void,
}



export const MyPosts = (props: any) => {
    let newPostEl = useRef<HTMLTextAreaElement>(null);

    const postChange = () => {
        if (newPostEl.current !== null) {
            let message = newPostEl.current.value
            props.onPostChange(message)
        }
    }
    const addPost = () => {
        if (newPostEl.current !== null) {
            let message = newPostEl.current.value
            props.addPost(message)
        }
    }

    return (
        <div>
            <div>
                <h3>My posts</h3>
                <textarea onChange={() => {
                    postChange()
                }} ref={newPostEl} name="post" id="12" cols={40} rows={10} value={props.postTextAreaData.letter}
                          placeholder={"Put your text"}></textarea>
                <button onClick={() => {
                    addPost()
                }}>Send
                </button>
            </div>
            <Post allMyPosts={props.allMyPosts}/>
        </div>
    );
};