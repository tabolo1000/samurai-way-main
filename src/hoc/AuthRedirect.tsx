import React from 'react';
import {Auth} from "../components/Header/Auth/Auth";

export const withAuthRedirect = (Component: any) => {
        class RedirectComponent extends React.Component<any> {
            render() {
                if(!this.props.isAuth){
                    return <Auth replace to = {"/auth"}/>
                }else{
                    return <Component {...this.props}/>
                }
            }
        }
        return RedirectComponent;
};



