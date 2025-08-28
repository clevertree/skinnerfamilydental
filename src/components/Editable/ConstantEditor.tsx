'use client'
import {EditableContext} from "@components/Editable/Context/EditableContext";
import {useContext} from "react";
import {SiteVariables} from "@util/editable";

export interface EditorState {
    constantName: keyof SiteVariables,
    constantValue: string,
}

export default function ConstantEditor({constantName}: EditorState) {
    const {showEditor} = useContext(EditableContext);
    return <div className={showEditor ? 'hidden1' : ''}>
        {constantName}
    </div>
};
