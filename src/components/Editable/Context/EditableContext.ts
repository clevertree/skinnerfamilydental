'use client'

import {createContext} from "react";
import * as Constants from "@constants";

export interface IEditableContext {
    constants: Partial<typeof Constants>
}

export const EditableContext = createContext<IEditableContext>({
    constants: {}
})

