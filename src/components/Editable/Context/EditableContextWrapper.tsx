'use client'

import React from "react";
import {EditableContext} from "@components/Editable/Context/EditableContext";
import ConstantEditor from "@components/Editable/ConstantEditor";

export default function EditableContextWrapper({children}: { children: React.ReactNode }) {
    return <EditableContext.Provider value={{
        constants: {}
    }}>
        {children}
        <ConstantEditor/>
    </EditableContext.Provider>
};