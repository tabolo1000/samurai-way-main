import React from 'react';
import {connect} from "react-redux";
import {Header} from "./Header";

const mapStateToProps = (state: any) => {
    return {
        auth: state.authReducer.isAuth,
        authId: state.authReducer.data.id,
    }
}


export let HeaderContainer = connect(mapStateToProps, {}) (Header)

