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

const mapStateToPropsForRedirect = (state: any) => {
    return (
        {
            isAuth: state.authReducer.isAuth
        }
    )
}

let AuthRedirectComponent1 = withAuthRedirect(Dialogs)
let AuthRedirectComponent: any = connect(mapStateToPropsForRedirect)(AuthRedirectComponent1)
export const DialogsContainer = connect(myStateToProps, myDispatchToProps)(AuthRedirectComponent);

