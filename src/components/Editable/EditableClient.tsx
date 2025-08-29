'use client'

import React, {DOMAttributes, HTMLAttributes, useContext} from "react";
import {EditableContext, VariableName} from "@components/Editable/Context/EditableContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";

export interface EditableClientProps extends HTMLAttributes<HTMLElement> {
    name: VariableName,
    value: string,
    html: boolean
    component?: React.ElementType<DOMAttributes<HTMLElement>>,
}

export default function EditableClient({
                                           name,
                                           value,
                                           html,
                                           component: Component,
                                           ...props
                                       }: EditableClientProps) {
    const {editMode, openEditor, showEditor, editVarUpdatedValue, editVarName} = useContext(EditableContext);
    if (!editMode)
        return value;
    const showValue: string = (name === editVarName && showEditor) ? `${editVarUpdatedValue}` : value;
    let returnValue: React.ReactNode | string = showValue;
    if (html) {
        const HTMLComponent = Component || 'span'
        returnValue = <HTMLComponent dangerouslySetInnerHTML={{
            __html: showValue
        }} {...props}/>

    } else {
        if (Component)
            returnValue = <Component {...props}>{returnValue}</Component>;
    }

    return (
        <span onClick={(e) => {
            e.preventDefault();
            openEditor(name, value);
        }}>
            {returnValue}
            <FontAwesomeIcon width={12} height={12}
                             icon={faEdit}
                             className='ml-1 cursor-pointer'/>
        </span>
    )
}
