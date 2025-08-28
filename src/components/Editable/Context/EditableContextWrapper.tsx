'use client'

import React from "react";
import {EditableContext} from "@components/Editable/Context/EditableContext";
import ConstantEditor from "@components/Editable/ConstantEditor";
import * as Constants from "@constants";

export default function EditableContextWrapper({children}: { children: React.ReactNode }) {
    // const [editMode, setEditMode] = React.useState(
    const editMode = process.env.NODE_ENV === 'development';
    const [showEditor, setShowEditor] = React.useState(false);
    const [constantName, setConstantName] = React.useState<keyof typeof Constants>('CONTACT_PHONE');
    return <EditableContext.Provider value={{
        editMode,
        showEditor,
        setConstantName,
        toggleEditMode: () => setShowEditor(!showEditor),
        constants: {}
    }}>
        {children}
        <ConstantEditor constantName={constantName}/>
    </EditableContext.Provider>
};