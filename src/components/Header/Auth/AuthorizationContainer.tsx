import React, {useEffect} from 'react';
import {Auth} from "./Auth";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../../store/authReducer";

class AuthorizationContainer extends React.Component<any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
    })
            .then((response) => {
        this.props.setAuthUserData(
            response.data.data
        )
    })
    }

    render(){
        return (
            <div>
                <Auth {...this.props}/>
            </div>
        );
    }

};

const myStateToProps = (state: any) => {
    return {
        data: state.authReducer.data
    }
}


export default connect(myStateToProps, {setAuthUserData})(AuthorizationContainer)
