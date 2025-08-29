'use client'

import React from "react";
import {EditableContext, IEditableContext} from "@components/Editable/Context/EditableContext";
import SiteEditor from "@components/Editable/Editor/SiteEditor";
import {updateSiteVar} from "@util/editable";

export default function EditableContextWrapper({children}: {
    children: React.ReactNode,
}) {
    // const [editMode, setEditMode] = React.useState(
    const editMode = process.env.NEXT_PUBLIC_EDIT_MODE === 'true';
    const [context, setContext] = React.useState<IEditableContext>({
        editMode,
        showEditor: false,
        openEditor(editVarName, editVarValue) {
            setContext((oldContext) => ({
                ...oldContext,
                editVarName,
                editVarDefaultValue: editVarValue,
                editVarUpdatedValue: editVarValue,
                showEditor: true,
            }))
        },
        updateEditorValue(editVarUpdatedValue: string) {
            setContext((oldContext) => ({
                ...oldContext,
                editVarUpdatedValue,
            }))
        },
        closeEditor: () => setContext((oldContext) => ({...oldContext, showEditor: false})),
        // getValue: (editorState: VariableName) => variables[editorState],
        // variables,
    });
    return <EditableContext.Provider value={context}>
        {children}
        {editMode && <SiteEditor onSubmit={updateSiteVar}/>}
    </EditableContext.Provider>
};
