import React, { Component } from 'react';
import { AvatarLittle } from "../../styles/GlobalStyle";
import { s } from "./Navbar.styles"





export class Navbar extends Component {

    menuItems: Array<MenuItem> = [
        { path: "/profile", name: "Profile" },
        { path: "/dialogs", name: "Message" },
        { path: "/news", name: "New" },
        { path: "/music", name: "Music" },
        { path: "/setting", name: "Setting" },
        { path: "/users", name: "Users" },
        { path: "/hoo", name: "Hoo" }
    ];

    arrayNavbar = this.menuItems.map((item: MenuItem) => {
        return (
            <s.NavItem>
                <s.NavLinkCustom to={`${item.path}`}>
                    {item.name}
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
                <s.Friends>
                    <s.FriendItem>
                        <s.NavLinkCustom  to={`/friends`}>{"Friends"}</s.NavLinkCustom>
                    </s.FriendItem>
                    {
                        (new Array(9).fill(0)).map(el => {
                           return <AvatarLittle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5w5ghtl6EAaVcfkPvw01kGw6lh_iM1u-C9w&usqp=CAU" alt="" />
                        })
                    }
                </s.Friends>
            </s.Sidebar>
        )
    }
}


//--------------types_Navbar-------------------------------


type MenuItem = {
    path: string,
    name: string,
}




