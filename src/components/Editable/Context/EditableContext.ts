'use client'

import {createContext} from "react";
import {VariableList} from "@constants";

export type VariableName = keyof VariableList;

export interface IEditableContext {
    editMode: boolean,
    showEditor: boolean,
    constants: Partial<VariableList>,

    getValue(constantName: VariableName): string,

    setConstantName(constantName: VariableName): void,

    toggleEditMode(): void,
}

export const EditableContext = createContext<IEditableContext>({
    editMode: false,
    showEditor: false,
    constants: {},
    getValue() {
        return
    },
    setConstantName() {
    },
    toggleEditMode: () => {
    }
})

