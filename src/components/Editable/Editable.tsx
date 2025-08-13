import React from 'react';
import * as Constants from "@constants"

export interface EditableProps {
    name: keyof typeof Constants
}

export default function Editable(props: EditableProps) {
    const value = Constants[props.name];
    return (
        <span>{value}</span>
    );
}
