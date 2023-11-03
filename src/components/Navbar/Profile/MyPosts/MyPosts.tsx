import React, {useRef} from 'react';
import {Post} from "./Post/Post";
import {allMyPropsType} from "../../../../App";

interface propsType {
    addPost: (myPost: string) => void;
    allMyPosts: Array<allMyPropsType>;
    changePostTextAreaData: (letter:string) => void,
    letter: string,
}

export const MyPosts = (props: propsType) => {

    // const newPostElement = React.createRef();
    let newPostEl = useRef<HTMLTextAreaElement>(null);

    const addletter= () => {
        if (newPostEl.current !== null){
            props.changePostTextAreaData(newPostEl.current.value)
        }
    }
    const addPost = () => {
        if (newPostEl.current !== null) {
            props.addPost(
                newPostEl.current.value)
        }
    }

    return (
        <div>
            <div>
                <h3>My posts</h3>
                <textarea onChange = {() => {addletter()}} ref={newPostEl} name="post" id="12" cols={40} rows={10} value = {props.letter} placeholder={"Put your text"}></textarea>
                <button onClick={() => {
                    addPost()
                }}>Send
                </button>
            </div>
            <Post allMyPosts={props.allMyPosts}/>
        </div>
    );
};