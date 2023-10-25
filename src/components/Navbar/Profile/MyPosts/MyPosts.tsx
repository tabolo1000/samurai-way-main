import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div>
                <h3>My posts</h3>
                <textarea name="post" id="12" cols={40} rows={10}></textarea>
                <button>Send</button>
            </div>
            <Post />
        </div>
    );
};