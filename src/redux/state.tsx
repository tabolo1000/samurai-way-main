import beach from "../image/images.jpeg"


export const store = {
    _state: {
        messageData: {
            dialogsData: [
                {
                    id: 1,
                    name: "Ola",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    id: 2,
                    name: "Viktoria",
                    image: "https://plus.unsplash.com/premium_photo-1675797367645-d441fd712bf3?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    id: 3,
                    name: "Anna",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
            ],
            postData: {
                otherUsersMessage: [
                    {id: 1, message: "Hello!", countLikes: 1, timeMessage: 12, isItMyMessage: false,},
                    {id: 2, message: "How are you?", countLikes: 1, timeMessage: 14, isItMyMessage: false},
                    {id: 3, message: "Not bad!", countLikes: 1, timeMessage: 16, isItMyMessage: false},
                    {id: 4, message: "", countLikes: 1, timeMessage: 18, isItMyMessage: false},
                ],
                myMessage: [
                    {
                        id: 1, message: "Hi!", countLikes: 1, timeMessage: 13, isItMyMessage: true,
                    },
                    {
                        id: 2, message: "I'm fine. You?", countLikes: 2, timeMessage: 15, isItMyMessage: true,
                    },
                    {
                        id: 3, message: "What's you family?", countLikes: 2, timeMessage: 17, isItMyMessage: true,
                    },
                    {
                        id: 4, message: "Good too!", countLikes: 2, timeMessage: 19, isItMyMessage: true,
                    }
                ],


            },
        },
        profileData: {
            postsProfileData: {
                profileInfo: {
                    img: beach,
                    name: "Nik Tabala",
                    date: "12.12.12",
                    city: "Minsk",
                    education: "BSU'11",
                    webSite: "https://"
                },
                allMyPosts: [
                    {
                        id: 1,
                        image: "https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg",
                        message: "What's you know about it"
                    }
                ],
                postTextAreaData: {
                    letter: "ss",
                }
            },


        }
    },
    getState() {
      return this._state;
    },
    changePostTextAreaData(letter: string) {
        this._state.profileData.postsProfileData.postTextAreaData.letter = letter;
        this._callSubscriber(this._state);
    },
    addPost(myPost: string):void {
        let lengththisArr = this._state.profileData.postsProfileData.allMyPosts.length;

        let post = {
            id: lengththisArr, message: myPost,
            image: "https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg",
        }
        this._state.profileData.postsProfileData.allMyPosts.push(post);
        this._state.profileData.postsProfileData.postTextAreaData.letter = "";
        this._callSubscriber(this._state);
    },
    _callSubscriber(state:any){
            console.log("hi")
        },
    subscriber(observer:any){
        this._callSubscriber = observer
   },
}

