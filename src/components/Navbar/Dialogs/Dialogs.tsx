import React from 'react';
import {DialogsStyled, LinkStyle, LinkList, NameDialog, UlList} from "./DialogsStyled";
import {Link} from 'react-router-dom';

export const Dialogs = () => {
    return (
        <div>
            <NameDialog>Dialog</NameDialog>
            <DialogsStyled>
                <UlList>
                    <LinkList><LinkStyle to = "/dialogs/Ola/">Ola</LinkStyle></LinkList>
                    <LinkList><LinkStyle to = "/dialogs/Viktoria/">Viktoria</LinkStyle></LinkList>
                    <LinkList><LinkStyle to = "/dialogs/Anna/">Anna</LinkStyle></LinkList>
                </UlList>
                <UlList>
                    <LinkList>Hi!</LinkList>
                    <LinkList>How are you.</LinkList>
                    <LinkList>I'm good. </LinkList>
                    <LinkList>Glad to hear it.</LinkList>
                </UlList>
            </DialogsStyled>
        </div>
    )
};

