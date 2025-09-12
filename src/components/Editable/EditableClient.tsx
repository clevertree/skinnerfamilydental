'use client'

import React, {DOMAttributes, HTMLAttributes, useContext} from "react";
import {EditableContext, VariableName} from "@components/Editable/Context/EditableContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import Markdown from 'markdown-to-jsx';

export interface EditableClientProps extends HTMLAttributes<HTMLElement> {
    name: VariableName,
    value: string,
    type?: 'text' | 'markdown' | 'html'
    component?: React.ElementType<DOMAttributes<HTMLElement>>,
}

export default function EditableClient({
                                           name,
                                           value,
                                           type,
                                           component: Component,
                                           ...props
                                       }: EditableClientProps) {
    const {editMode, openEditor, showEditor, editVarUpdatedValue, editVarName} = useContext(EditableContext);
    const showValue: string = (editMode
        && (name === editVarName)
        && showEditor) ? `${editVarUpdatedValue}` : value;
    let returnValue: React.ReactNode | string = showValue;

    if (type === 'html') {
        const HTMLComponent = Component || 'span'
        returnValue = <HTMLComponent dangerouslySetInnerHTML={{
            __html: showValue
        }} {...props}/>

    } else if (type === 'markdown') {
        returnValue = <Markdown options={{
            wrapper: Component
        }}>
                                 {showValue}
        </Markdown>
    } else {
        if (Component)
            returnValue = <Component {...props}>{showValue}</Component>;
    }
    if (!editMode || !name)
        return returnValue

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
