'use client'
import {EditableContext} from "@components/Editable/Context/EditableContext";
import {useContext} from "react";

export default function ConstantEditor() {
    const {constants} = useContext(EditableContext);
    return <div className='hidden'>
        {JSON.stringify(constants, null, 2)}
    </div>
};