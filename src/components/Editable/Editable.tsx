'use server'

import React, {DOMAttributes, HTMLAttributes} from 'react';
import {VariableName} from "@components/Editable/Context/EditableContext";
import EditableClient from "@components/Editable/EditableClient";
import {fetchSiteVars} from "@util/editable";

export interface EditableProps extends HTMLAttributes<HTMLElement> {
    name: VariableName,
    defaultValue: string,
    component?: React.ElementType<DOMAttributes<HTMLElement>>,
    html?: boolean
}

export default async function Editable({
                                           name,
                                           component,
                                           html = false,
                                           defaultValue,
                                           ...props
                                       }: EditableProps) {
    const siteVars = await fetchSiteVars()

    const siteVar = siteVars && siteVars[name] ? siteVars[name] : null;
    const siteVarValue = siteVar || defaultValue

    return (
        <EditableClient name={name}
                        html={html}
                        component={component}
                        value={siteVarValue}
                        {...props}
        />
    )
}
