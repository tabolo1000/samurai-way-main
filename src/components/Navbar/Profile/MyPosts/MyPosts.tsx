import React, {useRef} from 'react';
import {Post} from "./Post/Post";
import {allMyPropsType} from "../../../../App";

interface propsType {
    addPost: (myPost: string) => number;
    allMyPosts: Array<allMyPropsType>
}

export const MyPosts = (props: propsType) => {
    // const newPostElement = React.createRef();
    let newPostEl = useRef<HTMLTextAreaElement>(null);
    const addPost = () => {
        if (newPostEl.current !== null) {
            props.addPost(newPostEl.current.value)
        }
    }

    return (
        <div>
            <div>
                <h3>My posts</h3>
                <textarea ref={newPostEl} name="post" id="12" cols={40} rows={10}></textarea>
                <button onClick={() => {
                    addPost()
                }}>Send
                </button>
            </div>
            <Post/>
        </div>
    );
};