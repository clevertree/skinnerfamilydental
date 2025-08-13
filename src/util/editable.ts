import * as Constants from "@constants";

export function getValue(name: keyof typeof Constants) {
    return Constants[name];
}

