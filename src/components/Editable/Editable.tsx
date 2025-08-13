'use client'

import React, {DOMAttributes, HTMLAttributes} from 'react';
import * as Constants from "@constants"
import {getValue} from "@util/editable";

export interface EditableProps extends HTMLAttributes<HTMLSpanElement> {
    name: keyof typeof Constants,
    component?: React.ElementType<DOMAttributes<HTMLSpanElement>>,
    html?: boolean
}

export default function Editable({
                                     name,
                                     component: Component,
                                     html = false,
                                     ...props
                                 }: EditableProps) {
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

    return returnValue;
    // return <>
    //     {returnValue}
    //     <FontAwesomeIcon width={12} height={12}
    //                      icon={faEdit}
    //                      className='ml-1'/>
    // </>
}

