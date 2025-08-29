'use client'

import React, {HTMLAttributes, useContext} from "react";
import {EditableContext, VariableName} from "@components/Editable/Context/EditableContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";

export interface EditableClientProps extends HTMLAttributes<HTMLSpanElement> {
    name: VariableName,
    value: string
    children: React.ReactNode,
}

export default function EditableClient({
                                           name,
                                           children,
                                           value
                                       }: EditableClientProps) {
    const {editMode, openEditor, showEditor, editVarUpdatedValue, editVarName} = useContext(EditableContext);
    if (!editMode)
        return children;
    return (
        <span onClick={(e) => {
            e.preventDefault();
            openEditor(name, value);
        }}>
            {name === editVarName && showEditor ? editVarUpdatedValue : children}
            <FontAwesomeIcon width={12} height={12}
                             icon={faEdit}
                             className='ml-1'/>
        </span>
    )
}
