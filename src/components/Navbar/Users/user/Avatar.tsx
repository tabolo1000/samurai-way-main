import { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";




export class Avatar extends Component<UserProps> {
    render() {
        const {
            id,
            photos,
        } = this.props
        return (
            <NavLink
                to={`/profile/` + id}>
                <SamuraiAvatar
                    src={
                        (photos.large === null)
                            ? ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCpOS2pB-j57L3TGakCD768IzT27le10ZMg&usqp=CAU")
                            : photos.large
                    } />
            </NavLink>
        )
    }
}



//-----------styled_Avatar----------------------------------------

const SamuraiAvatar = styled.img`
  width: 100px;
  border-radius: 50%;
  border: 2px solid green;
  object-fit: cover;
  object-position: center;
`



//--------------types_for_Avatar-------------------------------------



type UserProps = {
    id: number,
    photos: {
        small: string | null,
        large: string | null,
    }
}
