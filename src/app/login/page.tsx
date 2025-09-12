import React from 'react';
import {buildMetaData} from "@util/metadata";
import {Metadata} from "next";
import {ClerkSessionContent} from "@components/Session/ClerkSessionContent";

export const metadata: Metadata = buildMetaData("Blog")

export default function LoginPage() {
    return (
        <ClerkSessionContent/>
    );
}
