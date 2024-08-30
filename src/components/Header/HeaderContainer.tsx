import {connect} from "react-redux";
import {Header} from "./Header";
import { RootState } from '../../store/reduxStore';
import { compose } from 'redux';
import { Data } from "../../store/authReducer";




const mapStateToProps: MapStateToProps = (state: any) => {
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
        authId: Data
    }
}
