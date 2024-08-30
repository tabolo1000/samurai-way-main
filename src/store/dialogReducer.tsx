
enum ACT {
    ADD_MESSAGE = "ADD_MESSAGE",
    CHANGE_DIALOGS_TEXT_AREA = "CHANGE_DIALOGS_TEXT_AREA",
}

type DialogsData = {
    id: number,
    name: string,
    image: string,
}
type PostData = {
    otherUsersMessage: { id: number, message: string, countLikes: number, timeMessage: number, isItMyMessage: boolean }[],
    myMessage: { id: number, message: string, countLikes: number, timeMessage: number, isItMyMessage: boolean }[],
    dialogTextArea: { textMessage: string }
}
type InitialState = {
    dialogsData: DialogsData[],
    postData: PostData,
}

let initialState: any = {
    dialogsData: [
        {
            id: 1,
            name: "Viktoria",
            image: "https://plus.unsplash.com/premium_photo-1675797367645-d441fd712bf3?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ],


    postData: {
        otherUsersMessage: [
            { id: 1, message: "Hello!", countLikes: 1, timeMessage: 12, isItMyMessage: false, },
        ],
        myMessage: [
            {
                id: 1, message: "Hi!", countLikes: 1, timeMessage: 13, isItMyMessage: true,
            },

        ],
        dialogTextArea: {
            textMessage: ""
        }


    },
}



const dialogReducer = (state = initialState, action: DialogAction) => {
    switch (action.type) {
        case ACT.ADD_MESSAGE:
            let idForMessage = state.postData.myMessage.length
            let newMessage: NewMessageType = {
                id: idForMessage,
                message: action.message,
                counterLike: 5,
                timeMessage: 20,
                isItMyMessage: true,
            }
            return {
                ...state,
                postData: {
                    ...state.postData,
                    myMessage: [
                        ...state.postData.myMessage,
                        newMessage
                    ],
                    dialogTextArea: {
                        ...state.postData.dialogTextArea,
                        textMessage: "",
                    },
                },
            };
        case ACT.CHANGE_DIALOGS_TEXT_AREA:
            return {
                ...state,
                postData: {
                    ...state.postData,
                    dialogTextArea: {
                        textMessage: action.message
                    }
                }
            }
        default:
            return state;

    }
};




export let addMessageAction = (message: string) => (
    {
        type: ACT.ADD_MESSAGE,
        message: message,
    } as const
)
export let typingAction = (message: string) => (
    {
        type: ACT.CHANGE_DIALOGS_TEXT_AREA,
        message: message,
    } as const
)

export default dialogReducer;


//-----------------------Dialog_Type---------------------------------------------

export type DialogAction = TypingAction | AddMessageAction

type TypingAction = ReturnType<typeof typingAction>;
type AddMessageAction = ReturnType<typeof addMessageAction>


interface NewMessageType {
    id: number,
    message: string,
    counterLike?: any,
    timeMessage: number,
    isItMyMessage: boolean,
}