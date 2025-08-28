'use server'

import React, {DOMAttributes, HTMLAttributes} from 'react';
import {VariableName} from "@components/Editable/Context/EditableContext";
import EditableClient from "@components/Editable/EditableClient";
import {fetchSiteVars} from "@util/editable";

export interface EditableProps extends HTMLAttributes<HTMLSpanElement> {
    name: VariableName,
    defaultValue: string,
    component?: React.ElementType<DOMAttributes<HTMLSpanElement>>,
    html?: boolean
}

export default async function Editable({
                                           name,
                                           component: Component,
                                           html = false,
                                           defaultValue,
                                           ...props
                                       }: EditableProps) {
    const siteVars = await fetchSiteVars()

    const siteVar = siteVars && siteVars[name] ? siteVars[name] : null;
    const siteVarValue = siteVar || defaultValue
    let returnValue: React.ReactNode | string = siteVar || defaultValue;
    console.log(name, returnValue, siteVars);
    if (html) {
        const HTMLComponent = Component || 'span'
        returnValue = <HTMLComponent dangerouslySetInnerHTML={{
            __html: returnValue
        }} {...props}/>

    } else {
        if (Component)
            returnValue = <Component {...props}>{returnValue}</Component>;
    }

    return (
        <EditableClient name={name} value={siteVarValue}>
            {returnValue}
        </EditableClient>
    )
}

