import { Component } from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";
import { RxAvatar } from "react-icons/rx";



export class SamuraiAvatar extends Component<UserProps> {
    render() {
        const {
            id,
            photos,
        } = this.props
        return (
            <NavLink
                to={`/profile/` + id}>
                <Avatar
                    size={80}
                    src={
                        (photos.large === null)
                            ? <RxAvatar size={"large"}/>
                            : photos.large
                    } />
            </NavLink>
        )
    }
}



//-----------styled_Avatar----------------------------------------





//--------------types_for_Avatar-------------------------------------



type UserProps = {
    id: number,
    photos: {
        small: string | null,
        large: string | null,
    }
}
