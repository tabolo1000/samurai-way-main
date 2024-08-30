import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";
import { addMessageAction, DialogAction, typingAction } from "../../../store/dialogReducer";
import { withAuthRedirect } from "../../../hoc/AuthRedirect";
import { RootState } from "../../../store/reduxStore";
import { Dispatch } from "react";
import { compose } from "redux";

const myStateToProps = (state: RootState) => {
    return {
        postData: state.dialogReducer.postData,
        dialogsData: state.dialogReducer.dialogsData,

    }
}
const myDispatchToProps = (dispatch: Dispatch<DialogAction>) => {
    return {
        sendMessage: (message: string) => dispatch(addMessageAction(message)),
        upDateNewMessageBody: (message: string) => dispatch(typingAction(message))
    }
}


export let AuthRedirect = withAuthRedirect(Dialogs)

export default compose( 
    connect(myStateToProps, myDispatchToProps)(AuthRedirect)
);

