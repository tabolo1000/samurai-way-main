import React from 'react';
import {Auth} from "../components/Header/Auth/Auth";
import {connect} from "react-redux";



const mapStateToPropsForRedirect = (state: any) => {
    return (
        {
            isAuth: state.authReducer.isAuth
        }
    )
}


export const withAuthRedirect = (Component: any) => {
    debugger
        class RedirectComponent extends React.Component<any> {
            render() {
                if(!this.props.isAuth){
                    return <Auth replace to = {"/auth"}/>
                }else{
                    return <Component {...this.props}/>
                }
            }
        }
        let AuthRedirectComponent: any = connect(mapStateToPropsForRedirect)(RedirectComponent)
        return AuthRedirectComponent;
};



