'use client'
import {EditableContext, VariableName} from "@components/Editable/Context/EditableContext";
import {useContext} from "react";

interface ConstantEditorProps {
    constantName: VariableName;
}

export default function ConstantEditor({constantName}: ConstantEditorProps) {
    const {constants, showEditor} = useContext(EditableContext);
    return <div className={showEditor ? 'hidden' : ''}>
        {JSON.stringify(constants, null, 2)}
        {constantName}
    </div>
};