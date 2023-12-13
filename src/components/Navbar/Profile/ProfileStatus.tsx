import React, {useState} from 'react';
import {render} from "react-dom";

interface localStateType {
    editMode: any,
    status: string,
}
export let ProfileStatus = (props: any) => {
    let localState: localStateType  = {
        editMode: false,
        status: "Put your status!",
    }
    let [mode, setLocalState] = useState({
        editMode: false,
        status: "Put your status!",
    })
    let activateEditMode = (stateBoolean: boolean) => {
        debugger
       return  setLocalState({
           ...mode,
           editMode: true,
           status: "Yep put here!"
       })
    }
    let deactivateEditMode = () =>{
        debugger
        setLocalState ({
            ...mode,
            editMode: false,
            status: "New your status!"
        })
    }
        return (
            <div>
                {
                    !mode.editMode &&
                    <div>
                        <span onClick = {() => { activateEditMode(true) }}>{ mode.status}</span>
                    </div>
                }
                {
                    mode.editMode &&
                    <div>
                        <input autoFocus = {true} onBlur = {()=> {
                            deactivateEditMode.bind(this)()
                        }} type="text" value={ mode.status}/>
                    </div>
                }
            </div>
        )
    }

