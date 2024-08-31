import React, { Component } from 'react';
import { AvatarLittle } from "../../styles/GlobalStyle";
import { s } from "./Navbar.styles"
import { GiNewspaper, GiRamProfile } from "react-icons/gi";
import { SiDialogflow } from "react-icons/si";
import { CiMusicNote1 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";


export class Navbar extends Component {

    menuItems: Array<MenuItem> = [
        { path: "/profile", name: "Profile", icon: <GiRamProfile /> },
        { path: "/dialogs", name: "Message", icon: <SiDialogflow /> },
        { path: "/news", name: "News", icon: <GiNewspaper /> },
        { path: "/music", name: "Music", icon: <CiMusicNote1 /> },
        { path: "/setting", name: "Setting", icon: <IoSettingsOutline /> },
        { path: "/users", name: "Users", icon: <LuUsers /> },
    ];

    arrayNavbar = this.menuItems.map((item: MenuItem) => {
        return (
            <s.NavItem>
                <s.NavLinkCustom to={`${item.path}`}>
                    {item.icon} {" " + item.name}
                </s.NavLinkCustom>
            </s.NavItem>
        )
    })

    render(): React.ReactNode {
        return (
            <s.Sidebar>
                <s.NavList>
                    {this.arrayNavbar}
                </s.NavList>

            </s.Sidebar>
        )
    }
}



/*<s.HARD_CODE_Friends>
<s.FriendItem>
    <s.NavLinkCustom to={`"/friends"`}>{"Friends"}</s.NavLinkCustom>
</s.FriendItem>
{
    (new Array(9).fill(0)).map(el => {
        return <AvatarLittle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5w5ghtl6EAaVcfkPvw01kGw6lh_iM1u-C9w&usqp=CAU" alt="" />
    })
}
</s.HARD_CODE_Friends>*/
//--------------types_Navbar-------------------------------


type MenuItem = {
    path: string,
    name: string,
    icon: JSX.Element,
}




