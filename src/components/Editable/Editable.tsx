'use server'

import React, {DOMAttributes, HTMLAttributes} from 'react';
import {VariableName} from "@components/Editable/Context/EditableContext";
import EditableClient from "@components/Editable/EditableClient";
import {fetchSiteVars} from "@util/editable";

export interface EditableProps extends HTMLAttributes<HTMLElement> {
    name: VariableName,
    children: string,
    component?: React.ElementType<DOMAttributes<HTMLElement>>,
    type?: 'text' | 'markdown' | 'html'
}

export default async function Editable({
                                           name,
                                           component,
                                           type = 'text',
                                           children,
                                           ...props
                                       }: EditableProps) {
    const siteVars = await fetchSiteVars()

    const siteVar = siteVars && siteVars[name] ? siteVars[name] : null;
    const siteVarValue = siteVar || children

    return (
        <EditableClient name={name}
                        type={type}
                        component={component}
                        value={siteVarValue}
                        {...props}
        />
    )
}
