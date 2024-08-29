import {connect} from "react-redux";
import {Header} from "./Header";
import { RootState } from '../../store/reduxStore';
import { compose } from 'redux';
import { ComponentType } from "react";




const mapStateToProps: MapStateToProps = (state) => {
    return {
        auth: state.authReducer.isAuth,
        authId: state.authReducer.data.id,
    }
}


export const HeaderContainer = compose(
    connect(mapStateToProps, {}) (Header)
)







//--------Types---------------------------------------------------

interface MapStateToProps {
    (state: RootState): {
        auth: boolean
        authId: string
    }
}
