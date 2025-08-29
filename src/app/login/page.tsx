import React from 'react';
import {buildMetaData} from "@util/metadata";
import {Metadata} from "next";
import LoginEmailForm from "@components/Session/LoginEmailForm";
import {loginEmailAction} from "@util/emailActions";

export const metadata: Metadata = buildMetaData("Blog")

export default function LoginPage() {
    return (
        <LoginEmailForm
            loginEmailAction={loginEmailAction}
        />
    );
}
