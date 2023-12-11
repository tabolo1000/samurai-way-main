import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, changeDialogTextAreaActionCreator} from "../../../store/dialogReducer";
import {withAuthRedirect} from "../../../hoc/AuthRedirect";

const myStateToProps = (state: any) => {
    return {
        postData: state.dialogReducer.postData,
        dialogsData: state.dialogReducer.dialogsData,

    }
}
const myDispatchToProps = (dispatch:any) => {
    return {
        sendMessage: (message: string) => dispatch(addMessageActionCreator(message)),
        upDateNewMessageBody: (message: string) => dispatch(changeDialogTextAreaActionCreator(message))
    }
}


export let AuthRedirectComponentForDialogs = withAuthRedirect(Dialogs)


export const DialogsContainer = connect(myStateToProps, myDispatchToProps)( AuthRedirectComponentForDialogs );

