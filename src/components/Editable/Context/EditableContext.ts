'use client'

import {createContext} from "react";


import {SiteVariables} from "@util/editable";

export type VariableName = keyof SiteVariables;

export interface IEditableContext {
    editMode: boolean,
    showEditor: boolean,
    editVarName?: keyof SiteVariables,
    editVarDefaultValue?: string,
    editVarUpdatedValue?: string,
    // variables: SiteVariables,

    // getValue(constantName: VariableName): string | undefined,

    openEditor(siteVarName: VariableName, siteVarCurrentValue: string): void,

    updateEditorValue(siteVarCurrentValue: string): void,

    closeEditor(): void,
}

export const EditableContext = createContext<IEditableContext>({
    editMode: false,
    showEditor: false,
    // variables: {},
    // getValue() {
    //     return undefined
    // },
    openEditor() {
    },
    updateEditorValue() {
    },
    closeEditor: () => {
    }
})

