'use client'

import React from "react";
import {EditableContext, IEditableContext} from "@components/Editable/Context/EditableContext";
import SiteEditor, {EditorState} from "@components/Editable/Editor/SiteEditor";

export default function EditableContextWrapper({children}: {
    children: React.ReactNode,
}) {
    // const [editMode, setEditMode] = React.useState(
    const editMode = process.env.NODE_ENV === 'development';
    const [editorState, setEditorState] = React.useState<EditorState | undefined>();
    const context: IEditableContext = {
        editMode,
        showEditor: !!editorState,
        openEditor(constantName, constantValue) {
            setEditorState({
                siteVarName: constantName,
                siteVarValue: constantValue
            })
        },
        closeEditor: () => setEditorState(undefined),
        // getValue: (editorState: VariableName) => variables[editorState],
        // variables,
    }
    console.log('context', context, editorState)
    return <EditableContext.Provider value={context}>
        {children}
        {editorState && <SiteEditor {...editorState}/>}
    </EditableContext.Provider>
};
