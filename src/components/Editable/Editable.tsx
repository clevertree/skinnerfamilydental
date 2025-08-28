'use client'

import React, {DOMAttributes, HTMLAttributes, useContext} from 'react';
import {getValue} from "@util/editable";
import {EditableContext, VariableName} from "@components/Editable/Context/EditableContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";

export interface EditableProps extends HTMLAttributes<HTMLSpanElement> {
    name: VariableName,
    component?: React.ElementType<DOMAttributes<HTMLSpanElement>>,
    html?: boolean
}

export default function Editable({
                                     name,
                                     component: Component,
                                     html = false,
                                     ...props
                                 }: EditableProps) {
    const {editMode, toggleEditMode, setConstantName} = useContext(EditableContext);
    const value = getValue(name);
    let returnValue: string | React.ReactNode = value;

    if (html) {
        const HTMLComponent = Component || 'span'
        returnValue = <HTMLComponent dangerouslySetInnerHTML={{
            __html: value
        }} {...props}/>

    } else {
        if (Component)
            returnValue = <Component {...props}>{returnValue}</Component>;
    }

    if (!editMode)
        return returnValue;
    return (
        <span onClick={(e) => {
            e.preventDefault();
            console.log(name)
            setConstantName(name);
            toggleEditMode();
        }}>
            {returnValue}
            <FontAwesomeIcon width={12} height={12}
                             icon={faEdit}
                             className='ml-1'/>
        </span>
    )
}

