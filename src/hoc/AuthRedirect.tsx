import React from 'react';
import {Auth} from "../components/Header/Auth/Auth";
import {connect} from "react-redux";
import { RootState } from '../store/reduxStore';




interface AuthRedirectProps {
    isAuth: boolean;
}

const mapStateToProps = (state: RootState): AuthRedirectProps => ({
    isAuth: state.authReducer.isAuth,
});


export function withAuthRedirect (Component: any) {
    class RedirectComponent extends React.Component< AuthRedirectProps> {
        render() {
            const { isAuth, ...restProps } = this.props;
            if (!isAuth) {
                return <Auth replace to="/auth" />
            } else {
                return <Component {...restProps} />
            }
        }
    }

    const connector = connect(mapStateToProps);
    const ConnectedRedirectComponent = connector(RedirectComponent);
    return ConnectedRedirectComponent;
}



