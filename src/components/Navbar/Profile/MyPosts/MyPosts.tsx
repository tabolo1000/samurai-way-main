import { ChangeEvent, Component } from 'react';
import { Post } from "./Post/Post";
import TextArea from 'antd/es/input/TextArea';
import { Button } from 'antd';
import { AllMyPostsType, PostTextAreaDataType } from '../ProfileContainer';
import styled from 'styled-components';


export class MyPosts extends Component<MyPostsProps> {

    //------------Handlers--------------------------

    changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.props.onPostChange(e.target.value)
    }
    addPostHandler = () => {
        this.props.addPost(this.props.postTextAreaData.letter)
    }
    //------------Render--------------------------------

    render() {
        const {
            postTextAreaData,
            allMyPosts,
        } = this.props
        return (
            <MainMyPosts>
                <div>
                    <h3>My posts</h3>
                    <div>
                        <TextArea
                            value={postTextAreaData.letter}
                            onChange={this.changeHandler}
                            placeholder="Typing your message!"
                            autoSize={{ minRows: 2, maxRows: 4 }}
                            style={{ maxWidth: "500px", marginRight: "5px" }}
                        />
                        <Button
                            type="primary"
                            onClick={this.addPostHandler}
                        >
                            Send
                        </Button>
                    </div>
                </div>
                <Post allMyPosts={allMyPosts} />
            </MainMyPosts>
        );
    }

}


const MainMyPosts = styled.div`
    text-align: center;
    h3{
        font-size: 40px;
        padding: 40px;
        }
`

//------------Type_My_Posts-----------------------------------

type MyPostsProps = {
    allMyPosts: AllMyPostsType[],
    postTextAreaData: PostTextAreaDataType,
    onPostChange: (message: string) => void,
    addPost: (message: string) => void,
}